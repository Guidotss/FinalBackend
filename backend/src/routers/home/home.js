import { Router } from "express";
import path from "path"; 
import { MensajesDao } from "../../daos/mensajesDao";


const router = Router();
const api = new MensajesDao();

router.get("/", async(req,res) => {
    const mensajes = await api.getAll();
    res.sendFile(path.resolve("frontend/public/views","index.html")); 
}); 

export default router;