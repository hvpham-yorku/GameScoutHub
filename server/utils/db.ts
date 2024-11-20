require('dotenv').config()
import mongoose from 'mongoose';

export class Database {
  private static instance: Database;

  private constructor() {
    this.connect();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  private connect(): void {
    mongoose.connect(process.env.DATABASE_URL as string)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
  }
}

