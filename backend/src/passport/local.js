import passport from "passport";
import { Strategy } from "passport-local";
import User from "../dataBase/models/user";

const LocalStrategy = Strategy; 

passport.use("login",new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
},async(req,email,password,done) => {
    const user = await User.findOne({email});
    const currentUser = new User();
    if(!user || !currentUser.validPassword(password,user.password)){
        return done(null,false);
    }else{
        return done(null,user);
    }
})); 


passport.use("signUp",new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
},async(req,email,password,done) => {
    const user = await User.findOne({email});
    if(user){
        return done(null,false);
    }else{
        const newUser = new User(); 
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null,newUser); 
    }
})); 

passport.serializeUser((user,done) => {
    return done(null,user._id);
}); 

passport.deserializeUser((id,done) => {
    const user = User.findById(id);
    return done(null,user);
}); 
