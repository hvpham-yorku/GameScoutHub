import { Router } from "express";
import { signUp,login,logout } from "../controllers/auth";
import { requireLogin } from "../middlewares/requireLogin";
export const authRoutes = Router()



authRoutes.get("/", async (req,res) => {
    res.json({msg:"Server opens"})
})

authRoutes.post("/signup", (req,res)=>{
    signUp(req,res)
})

authRoutes.post("/login",(req,res) => {
    login(req,res)
})

authRoutes.post("/logout",requireLogin,(req,res,next) => {
    logout(req,res)
})