import { Router } from "express";
import { requireLogin } from "../middlewares/requireLogin";

import gameListByGenre from "../controllers/gameListByGenre";
import gameListSaveGame from "../controllers/gameListSaveGame";

export const gameListRoutes = Router();

gameListRoutes.get("/bygenres", (req, res) => {
  gameListByGenre(req, res);
});

gameListRoutes.post("/save", requireLogin, (req, res) => {
  gameListSaveGame(req, res);
});
