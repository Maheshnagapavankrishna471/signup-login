import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:String,
    password:String
},
{ timestamps:true}
);
export default mongoose.model('jobs',userSchema)