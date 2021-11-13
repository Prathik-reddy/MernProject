const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema")

router.get("/", (req, res) => {
    res.send("hello frm home page")
})

router.post("/register", async (req, res) => {
    const {name,email,phone,work,password,cpassword} = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
       return res.status(422).send("Error in data received ");
    }
    try {
        const response = await User.findOne({email})
        if(response){
            return res.status(422).json("User with this email id is already registered");
        }
        const user =  new User({name, email, phone, work, password, cpassword})
        const userReg = await user.save();
        return res.status(200).json("User successfully registered");
    } catch (error) {
        return res.status(422).json("Registration failed");
    }
})

// login Route
router.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body;
        const response = await User.findOne({email})
        if(!email || !password){
            return res.status(422).send("Error in data received ");
        }
        if(response){
            return res.send("login successful"+response);
        }else{
            return res.status(400).send("login failed")
        }
    }catch (error) {
        return res.status(404).send("Login failed : " + error);
    }
})

module.exports = router;