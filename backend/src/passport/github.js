import passport from "passport";
import { Strategy } from "passport-github2";
import User from "../dataBase/models/user"; 

const githubStrategy = Strategy; 

passport.use(new githubStrategy({
    clientID: `${process.env.GITHUB_CLIENT_ID}`,
    clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
    callbackURL: `${process.env.GITHUB_CALLBACK_URL}`
},async(accessToken, refreshToken, profile, done) => {
    const user = await User.findOne({githubId: profile.id});
    if(user){
        return done(null,user); 
    }else{
        const newUser = new User(); 
        newUser.githubId = profile.id;
        newUser.name = profile.displayName;
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