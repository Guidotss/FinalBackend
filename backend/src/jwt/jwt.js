import jwt from "jsonwebtoken"; 
import dotenv from "dotenv"; 
dotenv.config(); 

const PRIVATE_KEY = `${process.env.jwtSectret}`;

export function crearToken(usuario){
    const token = jwt.sign({data:usuario},PRIVATE_KEY,{expiresIn:"1h"});
    return token;
}

export function auth(req,res,next){

    const authHeader = req.header["authorization"] || req.header["Authorization"];

    if(!authHeader) return res.status(401).json({message: "No autorizado"});
    
    if(!token){
        return res.redirect("http://localhost:8080/login");
    }
    const token = authHeader.split(" ")[1];

    try {
        req.user = jwt.verify(token,PRIVATE_KEY);
    } catch (error) {
        return res.redirect("http://localhost:8080/login");
    }
    next();
}

