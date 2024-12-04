import { Request, Response } from "express";
import { UserPreferenceModel } from "../schemas/gamePreferenceSchema";

export default async function gameListSaveGame(req: Request, res: Response) {
  const { gameid, saved } = req.body;

  // Validate the request payload
  if (!gameid || saved === undefined) {
    return res.status(400).json({ msg: "Missing or invalid payload" });
  }
  let userid = res.locals.usersLoad.id;

  try {
    // Find the user preference and update the game list
    const updateOperation = saved
      ? { $addToSet: { gameidList: gameid } } // Add the game if not already present
      : { $pull: { gameidList: gameid } }; // Remove the game if `saved` is false

    const record = await UserPreferenceModel.findOneAndUpdate(
      { userid }, // Query to find the record by userid
      updateOperation, // Update operation
      { new: true, upsert: true } // Options: create if not found, return the updated document
    );

    return res.status(200).json({
      msg: "User preference updated successfully",
      record,
    });
  } catch (error) {
    console.error("Error updating user preferences:", error);
    return res.status(500).json({ msg: "Internal server error", error });
  }
}
