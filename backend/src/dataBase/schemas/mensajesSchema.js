import mongoose from "mongoose";

export const mensajesSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    mensaje:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now,
        required:true
    }
}); 