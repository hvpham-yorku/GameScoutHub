import { Request, Response } from "express";
import { UserPreferenceModel } from "../schemas/gamePreferenceSchema";


export default async function getUserLikedGames(req: Request, res: Response) {
  const userid = res.locals.usersLoad.id; // Assuming you're tracking user with middleware

  try {
    const userPreferences = await UserPreferenceModel.findOne({ userid });
    if (userPreferences) {
      return res.status(200).json({ likedGames: userPreferences.gameidList });
    } else {
      return res.status(404).json({ msg: "User preferences not found" });
    }
  } catch (error) {
    console.error("Error fetching user preferences:", error);
    return res.status(500).json({ msg: "Internal server error", error });
  }
}

