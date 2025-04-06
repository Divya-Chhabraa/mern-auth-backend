import mongoose, { connect } from "mongoose";

const connectDB = async ()=>{

    mongoose.connection.on('connected',()=> console.log("DATABASE CONNECTED"));
    await mongoose.connect(`${process.env.MONGODB_URI}`);

};

export default connectDB;