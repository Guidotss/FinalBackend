import mongoose from "mongoose";


export class Carrito{
    constructor(collection,schema){
        this.collection = mongoose.model(collection,schema);
    }

    async getAll(){
        console.log("funciona productos");
        return await this.collection.find({});
    }
}