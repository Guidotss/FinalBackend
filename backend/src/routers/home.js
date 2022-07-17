import { Router } from "express";
import { MensajesDao } from "../daos/mensajesDao";
import { auth } from "../jwt/jwt";
import path from "path"; 
import jwt from "jsonwebtoken";



const router = Router();
const api = new MensajesDao();

router.get("/",(req,res) => {
    res.sendFile(path.resolve("frontend/public/views/home","home.html"));
}); 

export default router;