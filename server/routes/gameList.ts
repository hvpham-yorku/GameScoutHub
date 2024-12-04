import { Router } from "express";
import { requireLogin } from "../middlewares/requireLogin";

import gameListByGenre from "../controllers/gameListByGenre";
import gameListSaveGame from "../controllers/gameListSaveGame";
import getUserLikedGames from "../controllers/getUserLikedGames";
import toggleGameLike from "../controllers/toggleGameLike";

export const gameListRoutes = Router();

gameListRoutes.get("/bygenres", (req, res) => {
  gameListByGenre(req, res);
});

gameListRoutes.post("/save", requireLogin, (req, res) => {
  gameListSaveGame(req, res);
});

gameListRoutes.get("/likedgames", requireLogin, (req, res) => {
  getUserLikedGames(req, res); // This should handle fetching liked games
});

gameListRoutes.post("/togglelike", requireLogin, (req, res) => {
  toggleGameLike(req, res); // This should handle liking/unliking a game
});
