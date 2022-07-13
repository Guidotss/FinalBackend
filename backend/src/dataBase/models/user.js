import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    nombre: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    image: {type:String,required:true}
}); 

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}; 
userSchema.methods.validPassword = (password,dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
}; 


export default mongoose.model("users",userSchema);


