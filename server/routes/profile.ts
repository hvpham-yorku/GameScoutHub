import { Router } from "express";
import {
  getUserProfileByToken,
  getUserProfileById,
} from "../controllers/profile";
import { requireLogin } from "../middlewares/requireLogin";

export const profileRoutes = Router();

profileRoutes.get("/:userid", requireLogin, (req, res) => {
  getUserProfileById(req, res);
});

profileRoutes.get("/", (req, res) => {
  getUserProfileByToken(req, res);
});
