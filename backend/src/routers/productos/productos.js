import { Router } from "express";
import { ProductDao as api } from "../../daos/productDao"; 

const router = Router();



router.get("/", async(req,res) => {
    res.send("hola"); 
}); 




export default router;