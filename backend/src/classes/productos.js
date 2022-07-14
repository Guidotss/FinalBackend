import mongoose from "mongoose";

export class Producto{
    constructor(collection,schema){
        this.collection = mongoose.model(collection,schema);
    }

    async getAll(){
        console.log("funciona");
        return await this.collection.find({});
    }
}