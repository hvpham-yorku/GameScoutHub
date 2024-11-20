require("dotenv").config()
import * as jwt from "jsonwebtoken"
import {Request, Response,NextFunction} from "express"


export function requireLogin(req:Request,res:Response,next:NextFunction){
    const token = {value:req.cookies["GSH_LGIN_TOKEN"] as string};
   
    // if(!token.value) return res.status(401).json({msg:""})
        jwt.verify(token.value, process.env.LOGIN_TOKEN_SECRET as string, {}, (err, info) => {
            if (err) {
                return res.status(401).json({ msg: "Invalid or expired token" });
            }
            // req.user = info; // Optionally attach the decoded token payload to the request
            next(); // Proceed to the next middleware/route
        });
        


}