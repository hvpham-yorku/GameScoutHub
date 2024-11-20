import { Router,json } from "express";
import { signUp,login } from "../controllers/auth";

export const authRoutes = Router()
authRoutes.use(json())


authRoutes.get("/", async (req,res) => {
    res.json({msg:"Server opens"})
})

authRoutes.post("/signup", (req,res)=>{
    signUp(req,res)
})

authRoutes.post("/login",(req,res) => {
    login(req,res)
})