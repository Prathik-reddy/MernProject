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

module.exports = router;