import express from "express"; 
import morgan from "morgan"; 
import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import passport from "passport";
import path from "path"; 
import DB_CONFIG from "./dataBase/config/configDB";
import routesProductos from "./routers/productos/productos";
import routesCarrito from "./routers/cart/carrito";
import routesHome from "./routers/home/home";
import "./dataBase/database"; 
dotenv.config();

const app = express(); 



app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.use(morgan("dev"));
app.use(express.static(path.resolve("frontend/public"))); 
app.use(session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
    store:MongoStore.create({
        mongoUrl:DB_CONFIG.mongoDB.URLmongoStore,
        mongoOptions:DB_CONFIG.mongoDB.options,
        ttl:600
    })
})); 
app.use(passport.session()); 
app.use(passport.initialize());

app.use("/",routesHome);
app.use("/productos",routesProductos); 
app.use("/carrito",routesCarrito);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${server.address().port}`);
}); 
