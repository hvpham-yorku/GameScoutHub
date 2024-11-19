require('dotenv').config()

import { MongoClient, Db } from "mongodb";

class Database {
  private static instance: Database | null = null;
  private client: MongoClient | null = null;

  private constructor(private uri: string) {}

  // Method to retrieve the singleton instance
  public static async getInstance(uri: string): Promise<Database> {
    if (!Database.instance) {
      Database.instance = new Database(uri);
      await Database.instance.connect();
    }
    return Database.instance;
  }

  // Connect to MongoDB
  private async connect(): Promise<void> {
    if (this.client) {
      console.log("MongoDB connection already established.");
      return;
    }
    try {
      this.client = new MongoClient(this.uri);
      await this.client.connect();
      console.log("Connected to MongoDB.");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
      throw error;
    }
  }

  // Get a specific database by name
  public getDatabase(dbName: string): Db {
    if (!this.client) {
      throw new Error("MongoDB connection has not been established.");
    }
    return this.client.db(dbName);
  }

  // Close the connection
  public async close(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
      Database.instance = null;
      console.log("MongoDB connection closed.");
    }
  }
}

export const db =  Database.getInstance(process.env.DATABASE_URL as string)