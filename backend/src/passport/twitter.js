import { token } from "morgan";
import passport from "passport";
import { Strategy } from "passport-twitter";
import User from "../dataBase/models/user";

const TwitterStrategy = Strategy;

passport.use(new TwitterStrategy({
    consumerKey: `${process.env.TWITTER_CONSUMER_KEY}`,
    consumerSecret: `${process.env.TWITTER_CONSUMER_SECRET}`,
    callbackURL: `${process.env.TWITTER_CALLBACK_URL}`
},async(token,tokenSecret,profile,done) => {
    const user = await User.findOne({twitterId:profile.id});
    if(user){
        return done(null,user);
    }else{
        const newUser = new User({
            nombre:profile.displayName,
        });
        await newUser.save();
        return done(null,newUser);
    }
})); 

passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser((id,done) => {
    const user = User.findById(id);
    return done(null,user);
}); 