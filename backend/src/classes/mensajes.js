import mongoose from "mongoose";

export class Mensaje{
    constructor(collection,schema){
        this.collection = mongoose.model(collection,schema);
    }

    async getAll(){
        console.log("funciona mensajes");
        return await this.collection.find({});
    }
}