import { Router } from "express";
import passport from "passport";
import path from "path";
import { crearToken } from "../jwt/jwt";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/",(req,res) => {
    res.sendFile(path.resolve("frontend/public/views/login","login.html"));
}); 

router.post("/",async(req,res) => {
    passport.authenticate("login",(err,user) => {
        if(err) return res.status(500).json({message: "Error en el servidor"});
        if(!user) return res.status(400).json({message: "Usuario o contraseña incorrectos"});

        const token = crearToken(user);
        
        res.redirect("http://localhost:8080/home"); 
    })(req,res); 
}); 

router.get("/auth/facebook" ,passport.authenticate("facebook"));
router.get("/auth/facebook/callback", (req,res,next) =>{
    passport.authenticate("facebook",(err,user) => {
        if(err) return res.status(500).json({message: "Error en el servidor"});
        if(!user) return res.status(400).json({message: "Usuario o contraseña incorrectos"});

        const token = crearToken(user);
        res.redirect("http://localhost:8080/home");
    })(req,res,next); 
}); 

export default router; 