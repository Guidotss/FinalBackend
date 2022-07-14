import mongoose from "mongoose";

export const carritoSchema = new mongoose.Schema({
    carrito:{
        type:Array,
        required:true
    }
}); 