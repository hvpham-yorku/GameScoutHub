import { Router } from "express";
import { getProfileByToken, getUserProfile } from "../controllers/profile";
import { requireLogin } from "../middlewares/requireLogin";


export const profileRoutes = Router()

profileRoutes.get("/:userid", requireLogin,(req,res) => {
    getUserProfile(req,res)
})

profileRoutes.get("/",(req,res)=>{
    getProfileByToken(req,res)
})
