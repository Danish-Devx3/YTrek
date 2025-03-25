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
        
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password
        });
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

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({error: "errror in login"});
    }
}