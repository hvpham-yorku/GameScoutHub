import { Router } from "express";
import getGameNews from "../controllers/gamenews";
export const gamenewRoutes = Router()


gamenewRoutes.get("/", async (req,res) =>{
    getGameNews(req,res)
})