import mongoose from "mongoose";


export class Productos{
    contructor(collection,schema){
        this.collection = mongoose.model(collection,schema);
    }
}