import mongoose from "mongoose"; 

export const productsSchema = new mongoose.Schema({
    nombre: {type:String,required:true},
    precio: {type:Number,required:true},
    descripcion: {type:String},
    imagen: {type:String,required:true},
    categoria: {type:String,required:true},
    cantidad: {type:Number,required:true},
    timestamp: {type:Date,default:Date.now}
}); 