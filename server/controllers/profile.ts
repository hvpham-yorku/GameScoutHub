require("dotenv").config()
import {Request, Response} from "express"
import { UserModel } from "../models/user"
import * as jwt from "jsonwebtoken"


export async function getUserProfile(req:Request, res:Response){
   const userid = req.params.userid
   if(!userid) return res.status(400).json({msg:"Need to know you to get the profile", status:400})
    const userDoc:any = await UserModel.findById(userid);

   let { firstName, lastName, email, _id } = userDoc
   
   return res.status(200).json({_id, firstName, lastName, email})

}
export async function getProfileByToken(req:Request, res:Response){
   // Extract the login token from the cookies
   const token = {value:req.cookies["GSH_LGIN_TOKEN"] as string};
   
   //Verify if the token is valid 
   jwt.verify(token.value, process.env.LOGIN_TOKEN_SECRET as string, {}, (err, info) => {
       //Expire token or Invalid Token
           if (err) return res.status(401).json({ msg: "Invalid or expired token" });

           // If the token is valid, pass the decoded token information to the next middleware
           res.locals.usersLoad = info; 

           
       });

}