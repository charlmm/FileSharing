import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username: {type:String, unique:true},
  }, {timestamps: true});
  
  const UserModel = mongoose.model('User', UserSchema);
  module.exports = UserModel;