import dotenv from "dotenv";
dotenv.config();


export default{
    mongoDB:{
        URLmongoStore:`mongodb+srv://guido:${process.env.DB_PASSWORD}@cluster0.wtvdvhi.mongodb.net/Sessions?retryWrites=true&w=majority`,
        URLmongoEcommerce:`mongodb+srv://guido:${process.env.DB_PASSWORD}@cluster0.wtvdvhi.mongodb.net/Ecommerce?retryWrites=true&w=majority`,
        options:{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }
    }
}; 