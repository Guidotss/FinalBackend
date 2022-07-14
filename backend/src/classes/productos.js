import mongoose from "mongoose";

export class Producto{
    constructor(collection,schema){
        this.collection = mongoose.model(collection,schema);
    }
}