import { User } from "../db.js";
import jwt from "jsonwebtoken";



export const signup = async (req, res) =>{
    const {name, email, password} = req.body;
    try{
        const userAlreadyExists = await User.findOne({
            email: email
        });
        if(userAlreadyExists){
            return res.status(400).json({error: "User already exists"});
        }
        const user = await User.create({name, email, password});

        const token = jwt.sign({email: email}, process.env.JWT_SECRET);
        res.cookie("token", token);
        
        res.status(201).json({token});
    } catch (error){
        res.status(500).json({error: "errror in signup"});
    }
}         

export const login = async (req, res) =>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({
            email: email,
            password: password
        })

        if(!user){
            return res.status(400).json({error: "User not found"});
        }

        const token = jwt.sign({email: email}, process.env.JWT_SECRET);
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({error: "errror in login"});
    }                                         
}

export const profile = async (req, res)=>{
    const userId = req.user.id;
    const user = await User.findById(userId);
    if(!user){
        return res.status(404).json({error: "User not found"});
    }
    res.status(200).json(user);
}