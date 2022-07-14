import { Router } from "express";
import { CartDao } from "../../daos/cartDao";

const router = Router();
const api = new CartDao();

router.get("/", async(req,res) => {
    const cart = await api.getAll();
    res.json(cart);
}); 


export default router;