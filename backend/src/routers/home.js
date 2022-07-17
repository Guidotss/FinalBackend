import { Router } from "express";
import path from "path"; 
import { MensajesDao } from "../daos/mensajesDao";
import { auth } from "../middlewares/auth";




const router = Router();
const api = new MensajesDao();

router.get("/",(req,res) => {
    res.sendFile(path.resolve("frontend/public/views/home","home.html"));
}); 

export default router;