import { Router } from "express";
import { getUserProfile } from "../controllers/profile";
import { requireLogin } from "../middlewares/requireLogin";


export const profileRoutes = Router()

profileRoutes.get("/:userid", requireLogin,(req,res) => {
    getUserProfile(req,res)
})