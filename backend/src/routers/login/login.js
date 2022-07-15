import { Router } from "express";
import passport from "passport";
import path from "path";

const router = Router();

router.get("/",(req,res) => {
    res.sendFile(path.resolve("frontend/public/views/login","login.html"));
}); 


export default router; 