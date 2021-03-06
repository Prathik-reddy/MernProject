const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const router = require("../Routes/auth");

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.mern;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});

        if(!rootUser){
            throw new Error("User not found");
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userId=rootUser._id;
        next();
    } catch (error) {
        res.status(401).send("unathorized user")
        console.log(error);
    }
}
module.exports = Authenticate;