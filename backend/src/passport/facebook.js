import passport from "passport";
import { Strategy } from "passport-facebook";
import dotenv from "dotenv";
import User from "../dataBase/models/user";
dotenv.config();


const FacebookStrategy = Strategy;

passport.use(new FacebookStrategy({
    clientID: `${process.env.FACEBOOK_CLIENT_ID}`,
    clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
    callbackURL: `${process.env.FACEBOOK_CALLBACK_URL}`,
},async(accessToken, refreshToken, profile, done) => {
    const user = await User.findOne({facebookId: profile.id});
    if(user){
        return done(null,user); 
    }else{
        const newUser = new User(); 
        newUser.facebookId = profile.id;
        newUser.name = profile.displayName;
        console.log(profile);
        newUser.save(); 
        done(null,newUser);
    }
})); 


passport.serializeUser((user,done) => {
    done(null,user._id);
}); 

passport.deserializeUser(async(id,done) => {
    const user = await User.findById(id);
    done(null,user);
});