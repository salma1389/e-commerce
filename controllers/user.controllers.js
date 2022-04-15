const usser=require("../model/user");
var jwt = require('jsonwebtoken');
var bc = require ('bcryptjs');
const config=require("config")
const secret=config.get("secret")


exports.signUp=async(req,res)=>{
    const {fullName,email,password,roles}=req.body;
    try {
       const existingUser= await usser.findOne({email})
       if (existingUser) {
           res.status(401).json({msg:"user is already exist"})
       }
       const newUser = new usser ({fullName,email,password,roles}) 
       const salt=await bc.genSalt(10)
       const hash=await bc.hashSync(password,salt)
       newUser.password=hash
       await newUser.save()
       const payload= {
           _id:newUser._id,
           fullName:newUser.fullName,
           email:newUser.email,
           roles:newUser.roles
       };

      const token=jwt.sign(payload,secret)
       res.status(200).send({
           token,
           user:{
               id:newUser._id,
               fullName:newUser.fullName,
               email:newUser.email,
               password:newUser.password,
               roles:newUser.roles
           }
       })
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


exports.login=async(req,res)=>{
    const {email,password}=req.body
    try {
        const theUser=await usser.findOne({email})
        if (!theUser){
            res.status(402).json({msg:"email or password invalid"})
        }
        const isMatch=await bc.compare(password,theUser.password)
        if (!isMatch){
            res.status(402).json({msg:"email or password invalid"})
        }
        const payload= {
            id:theUser._id,
            fullName:theUser.fullName,
            email:theUser.email
        };

        const token=jwt.sign(payload,secret)
        res.status(202).send({
            token,
            user:{
                id:theUser._id,
                fullName:theUser.fullName,
                email:theUser.email,
                password:theUser.password
            }
        })
    } catch (error) {
        res.status(501).json({msg:error.message})
    }
}

exports.getUser=(req,res)=>{
    res.send(req.user)
}