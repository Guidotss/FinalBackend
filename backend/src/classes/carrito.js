import mongoose from "mongoose";


export class Carrito{
    contructor(collection,schema){
        this.collection = mongoose.model(collection,schema);
    }
}