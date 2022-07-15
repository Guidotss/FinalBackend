import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    req.session.destroy();
    res.redirect("http://localhost:8080/login");
}); 

export default router; 