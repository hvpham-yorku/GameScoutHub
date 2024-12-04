import { Router } from "express";
import gameListByGenre from "../controllers/gameListByGenre";

export const gameListRoutes = Router();

gameListRoutes.get("/bygenres", (req, res) => {
  gameListByGenre(req, res);
});
