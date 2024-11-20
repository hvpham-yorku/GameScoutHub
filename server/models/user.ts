import { bcrypts } from "bcryptjs";
class User {
  userid: string;
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  private _rawPassword: string;
  private _hashedPassword: string;
  gamingPreference: string[];

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  set hashedPassword(password: string) {
    this._rawPassword = password;
    this._hashedPassword = this.hashPassword(password);
  }

  private hashPassword(password: string) {}
}
