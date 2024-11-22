import mongoose from "mongoose";

//Create Schema for MongoDB
export const UserSchema = new mongoose.Schema({
    
    firstName:{
        required:true,
        min:1,
        type:String
        
    },
    lastName:{
        required:true,
        min:1,
        type:String
    },
    dob:{

    },
    email:{
        type: String,
        required: true, 
        min:4,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required: true
    
    }
})

