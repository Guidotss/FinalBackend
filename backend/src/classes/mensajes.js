import mongoose from "mongoose";

export class Mensaje{
    constructor(mensajesSchema,collection){
        this.collection = mongoose.model(collection,mensajesSchema);
    }
}