import { Router } from "express";
import passport from "passport";
import path from "path";
//import { crearToken } from "../jwt/jwt";
//import jwt from "jsonwebtoken";

const router = Router();

router.get("/",(req,res) => {
    res.sendFile(path.resolve("frontend/public/views/login","login.html"));
}); 

router.post("/",passport.authenticate("login",{
    successRedirect: "/home",
    failureRedirect: "/login",
})); 

router.get("/auth/facebook" ,passport.authenticate("facebook"));
router.get("/auth/facebook/callback",passport.authenticate("facebook",{
    successRedirect: "/home",
    failureRedirect: "/login",
}));

router.get("/auth/github",passport.authenticate("github"));
router.get("/auth/github/callback",passport.authenticate("github",{
    successRedirect: "/home",
    failureRedirect: "/login",
}));

router.get("/auth/twitter",passport.authenticate("twitter"));
router.get("/auth/twitter/callback",passport.authenticate("twitter",{
    successRedirect: "/home",
    failureRedirect: "/login",
})); 

export default router; 