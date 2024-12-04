import mongoose from "mongoose";

const UserPreferenceSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true, // Assuming each user ID should be unique
  },
  gameidList: {
    type: [String], // Array of strings for game IDs
    default: [], // Default to an empty array if not provided
  },
});

export const UserPreferenceModel = mongoose.model(
  "UserPreference",
  UserPreferenceSchema
);


