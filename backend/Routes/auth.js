const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/UserSchema");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate")
const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get("/", (req, res) => {
    res.send("hello frm home page")
})

router.post("/register", async (req, res) => {
    const {
        name,email,phone,work,password,cpassword} = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).send("Error in data received ");
    }
    if (!(password == cpassword)) {
        return res.status(422).send("Error in password received ");
    }
    try {
        const response = await User.findOne({
            email
        })
        if (response) {
            return res.status(422).json("User with this email id is already registered");
        }
        const user = new User({name,email,phone,work,password,cpassword})
        // hashing password using a middleware
        const userReg = await user.save();
        return res.status(200).json(userReg);
    } catch (error) {
        return res.status(422).json("Registration failed");
    }
})

// login Route
router.post("/login", async (req, res) => {
    try {
        const {email,password} = req.body;
        const emailResp = await User.findOne({email});
        console.log(emailResp);
        if (!email || !password) {
            return res.status(422).send("Error in data received ");
        }
        // checking if the password stored in the db and the password entered at the login time is same
        if (emailResp) {
            const isMatch = await bcrypt.compare(password, emailResp.password);

            if (isMatch) {
                const token = await emailResp.generateAuthToken();
                console.log("token is " + token);
                res.cookie("mern",token,{
                    expires:new Date(Date.now()+25892000000 ),//30 days
                    httpOnly:true
                });
                res.send(emailResp);
            } else {
                return res.status(400).send("login failed");
            }
        }else{
            res.status(400).send("invalid credentials");
        }
    } catch (error) {
        return res.status(404).send("Login failed : " + error);
    }
})

// About us page
router.get('/about',authenticate, (req, res) => {
    res.send(req.rootUser)
})

// User data for contact page and home page
router.get("/getData",authenticate, (req, res) => {
    res.send(req.rootUser)
})

// Contact us data
router.post("/contact",authenticate,async(req, res)=>{
     try {
         const {name,email,phone,msg}=req.body;
         console.log(req.body);
         if(!name || !email || !phone|| !msg){
             return res.status(400).send("Error in Contact form")
         }
         const userId = await User.findOne({_id:req.userId});
         if(userId){
            //  addMessage def in UserSchema
             const userMsg =await userId.addMessage(name, email, phone,msg);
             await userId.save();
             res.status(201).json({msg:"Msg received successfully"});
         }

     } catch (error) {
        console.log(error);
     }
})

// SignOut page
router.get('/signOut', (req, res) => {
    res.clearCookie("mern",{path:"/"});
    res.status(200).send("userLogout")
})


module.exports = router;