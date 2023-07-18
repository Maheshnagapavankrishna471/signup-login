import loginModel from "../models/loginModel.js";
import bcrypt from "bcrypt"


export const postLoginController = async (req,res) =>{
    const {name,password} = req.body
    let existeduser;
    try{
        existeduser = await loginModel.findOne({name})
        if(existeduser){
            const match=await bcrypt.compare(password,existeduser.password)
            if(!match){
                res.json({
                    message:"wrong password"
                })
            }
            else{
                res.json({
                    message:"correct password"
                })
            }
        }
    }
    catch(err){
        res.json({
            error:err
        })
    }  
}

export const sign = async (req,res) =>{
    const {name,password}=req.body;
    try{
        const hashedpassword=bcrypt.hashSync(password,10)
        const newUser= await new loginModel({
            name:name,
            password:hashedpassword
        })
        await newUser.save()
        res.json({message:"data sent"})
    }
    catch(err){
        console.log(err)
        res.json({message:err})
    }  
}