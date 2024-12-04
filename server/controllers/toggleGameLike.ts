import { Request, Response } from "express";
import { UserPreferenceModel } from "../schemas/gamePreferenceSchema";

export default async function toggleGameLike(req: Request, res: Response) {
  const { gameid, liked } = req.body;
  const userid = res.locals.usersLoad.id;

  try {
    let userPreferences = await UserPreferenceModel.findOne({ userid });

    if (!userPreferences) {
      userPreferences = new UserPreferenceModel({
        userid,
        gameidList: [],
      });
    }

    if (liked) {
      if (!userPreferences.gameidList.includes(gameid)) {
        userPreferences.gameidList.push(gameid);
      }
    } else {
        userPreferences.gameidList = userPreferences.gameidList.filter(id => id !== gameid);
    }
    await userPreferences.save();

    // Respond with success status and the updated list of liked games
    return res.status(200).json({
      msg: "User preferences updated successfully",
      likedGames: userPreferences.gameidList,
    });
  } catch (error) {
    console.error("Error updating user preferences:", error);
    return res.status(500).json({ msg: "Internal server error", error });
  }
}