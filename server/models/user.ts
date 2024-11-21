import bcrypt from "bcryptjs"
import { UserSchema } from "../schemas/userSchema";
import mongoose from "mongoose";
const SALT = 10


/**
 * Represents a user in the system.
 * Provides functionality to hash passwords and interact with user data.
 */
export class User {
  userid: string | undefined;
  firstName: string;
  lastName: string;
  dob: Date| undefined;
  email: string;
  private _hashedPassword: string | undefined;

  /**
   * Constructs a new User object with the provided details.
   * @param firstName - The user's first name.
   * @param lastName - The user's last name.
   * @param email - The user's email address.
   */
  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  
  /**
   * Sets the user's password by hashing it securely.
   * @param password - The plaintext password to be hashed and stored.
   */
  async setPassword(password: string) {
    this._hashedPassword = await this.hashPassword(password);
  }

  /**
   * Hashes the given plaintext password using bcrypt.
   * @param password - The plaintext password to hash.
   * @returns A promise resolving to the hashed password.
   */
  private async hashPassword(password: string):Promise<string>{
    return await bcrypt.hash(password,SALT)
  }

   /**
   * Getter for the hashed password.
   * Ensures the hashed password is accessed securely.
   * @returns The hashed password as a string.
   */
  get hashedPassword():string{
    return this._hashedPassword as string
  }
}


//Load class into schema
UserSchema.loadClass(User)

//Model to insert, update or delete User object
export const UserModel = mongoose.model("Users", UserSchema)
