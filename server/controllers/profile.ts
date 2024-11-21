require("dotenv").config()
import {Request, Response} from "express"
import { UserModel } from "../models/user"


export async function getUserProfile(req:Request, res:Response){
   const userid = req.params.userid
   if(!userid) return res.status(400).json({msg:"Need to know you to get the profile", status:400})
    const userDoc:any = await UserModel.findById(userid);

   let { firstName, lastName, email, _id } = userDoc
   
   return res.status(200).json({_id, firstName, lastName, email})

}