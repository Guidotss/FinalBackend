import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    nombre: {type:String},
    email: {type:String},
    password: {type:String},
    image: {type:String},
    facebookId: {type:String},
    githubId: {type:String},
}); 

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}; 
userSchema.methods.validPassword = (password,dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
}; 


export default mongoose.model("users",userSchema);


