import bcrypt from "bcryptjs"
import { UserSchema } from "../schemas/userSchema";
import mongoose from "mongoose";
const SALT = 10

export class User {
  userid: string | undefined;
  firstName: string;
  lastName: string;
  dob: Date| undefined;
  email: string;
  private _hashedPassword: string | undefined;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  async setPassword(password: string) {
    this._hashedPassword = await this.hashPassword(password);
  }

  private async hashPassword(password: string):Promise<string>{
    return await bcrypt.hash(password,SALT)
  }
  async checkPassword(password:string) {
    if(!this._hashedPassword) return false
    return bcrypt.compare(password, this._hashedPassword)
  }
  get hashedPassword():string{
    return this._hashedPassword as string
  }
}


//Load class into schema
UserSchema.loadClass(User)

export const UserModel = mongoose.model("Users", UserSchema)
