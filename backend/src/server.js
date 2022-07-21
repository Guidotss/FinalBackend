import express from "express"; 
import morgan from "morgan"; 
import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import passport from "passport";
import path from "path"; 
import DB_CONFIG from "./dataBase/config/configDB";
import routesProductos from "./routers/productos";
import routesCarrito from "./routers/carrito";
import routesHome from "./routers/home";
import routesLogin from "./routers/login";
import routesLogout from "./routers/logout";
import routesSignUp from "./routers/signUp";
import routesEntrada from "./routers/entrada";
import "./dataBase/database"; 
import "./passport/local";
import "./passport/facebook";
import  "./passport/github";
import "./passport/twitter";

dotenv.config();

const app = express(); 



app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.use(morgan("dev"));
app.use(express.static(path.resolve("frontend/public"))); 
app.use(session({
    store:MongoStore.create({
        mongoUrl:DB_CONFIG.mongoDB.URLmongoStore,
        mongoOptions:DB_CONFIG.mongoDB.options,
        ttl:600
    }), 
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
})); 
app.use(passport.session()); 
app.use(passport.initialize());

app.use("/",routesEntrada); 
app.use("/home",routesHome);
app.use("/productos",routesProductos); 
app.use("/carrito",routesCarrito);
app.use("/signUp",routesSignUp);
app.use("/login",routesLogin);
app.use("/logout",routesLogout);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${server.address().port}`);
}); 
