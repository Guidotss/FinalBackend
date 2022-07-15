import { Router } from "express";
import { ProductDao } from "../daos/productDao";

const api = new ProductDao();



const router = Router();



router.get("/", async(req,res) => {
    const productos = api.getAll();
    res.json(productos);
}); 




export default router;