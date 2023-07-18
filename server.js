import  Express from "express";
import route from "./routes/loginRoute.js";
import cors from "cors";
import conn from "./database/conn.js"
import dotenv from "dotenv";

const app = Express()

app.use(Express.json())

app.use(cors())
dotenv.config()
app.use(route)

conn().then(()=>{
    app.listen(1818, ()=>{
        console.log("server start on port 1818")
    })
}).catch(err =>{
    console.log(err)
})







