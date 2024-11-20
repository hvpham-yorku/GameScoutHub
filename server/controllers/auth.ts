import { User, UserModel } from "../models/user";
import {Request, Response} from "express"

export async function signUp(req:Request,res:Response){

    try {
        //Get data from request
        const {firstName, lastName, dob, email,password} = req.body;

        //Find existing user
        let userExisted = await UserModel.findOne({email})
        if(userExisted != null) return res.status(400).json({msg:"User existed"})

        //Create new user
        let newUser = new User(firstName, lastName,email)
        await newUser.setPassword(password);
        await UserModel.create({...newUser, password:newUser.hashedPassword});

        //Return result
        return res.status(200).json({msg:"Created new user successfully"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Internal Server Error"})

        
    }

  
}

export async function login(req:any,res:any){

}