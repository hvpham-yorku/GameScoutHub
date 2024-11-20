require("dotenv").config()
import { User, UserModel } from "../models/user";
import {Request, Response} from "express"
import bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken";


/**
 * Sign up a new user.
 * 
 * @param req - Express request object, expecting `firstName`, `lastName`, `dob`, `email`, and `password` in the request body.
 * @param res - Express response object, used to send a response back to the client.
 * @returns Response success response, missing payload, bad requests or server error
*/
export async function signUp(req:Request,res:Response){

    try {
        //Get data from request
        const {firstName, lastName, dob, email,password} = req.body;
        if(!email || !password || !firstName || !lastName) return res.status(400).json({msg:"Missing Payload"})


        //Find existing user
        let userExisted = await UserModel.findOne({email})
        if(userExisted != null) return res.status(401).json({msg:"User existed"})

        //Create new user
        let newUser = new User(firstName, lastName,email)
        await newUser.setPassword(password);
        await UserModel.create({...newUser, password:newUser.hashedPassword});

        //Return result
        return res.status(200).json({msg:"Created new user successfully"})
        
    } 
    //Internal Server Error catch
    catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Internal Server Error"})
    }
}

/**
 * Log in an existing user.
 * 
 * @param req - Express request object, expecting `email` and `password` in the request body.
 * @param res - Express response object, used to send a response back to the client.
 * @returns - A login token is sent as a cookie upon successful authentication.
 */

export async function login(req:Request,res:Response){
    try {
        const {email, password} = req.body
        if(!email || !password) return res.status(400).json({msg:"Missing Payload"})

        //Find existing user
        let userExisted = await UserModel.findOne({email})
        if(userExisted == null) return res.status(401).json({msg:"Invalid Credentials"})
        
        //Compare password
        let isPasswordMatch = await bcrypt.compare(password, userExisted.password)
        if(!isPasswordMatch) return res.status(401).json({msg:"Invalid Credentials"})

        //Generate login token
       const loginToken = jwt.sign({
        id: userExisted._id
       }, process.env.LOGIN_TOKEN_SECRET as string)

       //Return result
        return res.status(200).cookie("GSH_LGIN_TOKEN", loginToken).json({msg:"Login Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Internal Server Error"})
    }
}

/**
 * Log out the user by clearing the login token.
 * 
 * @param req - Express request object (not used in this function).
 * @param res - Express response object, used to send a response back to the client.
 * @returns - Clears the login cookie and sends a success response.
 */
export async function logout(req:Request, res:Response){
    return res.status(200).clearCookie("GSH_LGIN_TOKEN").json({msg:"Logout Successfully"})
}