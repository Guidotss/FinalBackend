import mongoose from "mongoose"; 
import DB_CONFIG from "./config/configDB";


mongoose.connect(DB_CONFIG.mongoDB.URLmongoUsers, DB_CONFIG.mongoDB.options)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.log(err);
    }); 