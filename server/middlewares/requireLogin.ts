require("dotenv").config()
import * as jwt from "jsonwebtoken"
import {Request, Response,NextFunction} from "express"


/**
 * Middleware to require a valid login token for protected routes.
 * Verifies the presence and validity of the JWT token in the request cookies.
 * 
 * @param req - Express request object, which contains the token in the cookies.
 * @param res - Express response object, used to send a response if the token is invalid or expired.
 * @param next - Express next function, used to pass control to the next middleware or route handler.
 */
export function requireLogin(req:Request,res:Response,next:NextFunction){

    // Extract the login token from the cookies
    const token = {value:req.cookies["GSH_LGIN_TOKEN"] as string};
   
    //Verify if the token is valid 
    jwt.verify(token.value, process.env.LOGIN_TOKEN_SECRET as string, {}, (err, info) => {
        //Expire token or Invalid Token
            if (err) return res.status(401).json({ msg: "Invalid or expired token" });

            // If the token is valid, pass the decoded token information to the next middleware
            res.locals.usersLoad = info; 

            // Proceed to the next middleware/route
            next(); 
        });
        


}