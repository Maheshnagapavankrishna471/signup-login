import { Router } from "express";
import {  postLoginController, sign } from "../controllers/postLoginController.js";


const route = Router()

route.post('/login',postLoginController)

route.post('/signup',sign)



export default route