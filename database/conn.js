import mongoose from "mongoose";

async function conn(){
    await mongoose.connect(process.env.val)
}
export default conn