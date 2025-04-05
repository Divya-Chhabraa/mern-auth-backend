import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type: String, required : true},
    email : {type: String, required : true, unique: true},
    password : {type: String, required : true},
    verifyOtp : {type: String, default : ''},
    verifyOtpExpireAt : {type: Number, deafult: 0},
    isAccountVerified : {type: Boolean, deafult: false},
    resetOtp : {type: String, deafult: ''},
    resetOtpExpireAt : {type: Number, deafult: 0},
});

const userModel= -mongoose.models.user ||  mongoose.model('user', userSchema);

export default userModel;