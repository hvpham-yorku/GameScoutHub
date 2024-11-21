import mongoose, { Schema, Document } from 'mongoose';

export interface IGame extends Document {
  appid: number;
  name: string;
  genre: string;
  description: string;
  image: string;
  news: { title: string; url: string; contents: string }[];
}

const GameSchema: Schema = new Schema({
  appid: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  genre: { type: String },
  description: { type: String },
  image: { type: String },
  news: [
    {
      title: { type: String },
      url: { type: String },
      contents: { type: String },
    },
  ],
});

export default mongoose.model<IGame>('Game', GameSchema);