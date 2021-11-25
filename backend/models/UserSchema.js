const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[
        {
            name:{
                type:String,
                required:true,
            },
            email:{
                type:String,
                required:true,
            },
            phone:{
                type:Number,
                required:true,
            },
            msg:{
                type:String,
                required:true,
            },
        }
    ],
    tokens:[{
        token:{
            type:String,
            required:true,
        }
    }]
})

// middleware for hashing the password
userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=bcrypt.hashSync(this.password,12);
        this.cpassword=bcrypt.hashSync(this.cpassword,12);
    }
    next();
})

// generating a token
userSchema.methods.generateAuthToken = async function(){
    try {
        let tokenGen = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:tokenGen});
        await this.save();
        return tokenGen;
    } catch (error) {
        res.send(error);
    }
}
// Storing the message
userSchema.methods.addMessage = async function(name,email,phone,msg){
    try {
        this.messages = this.messages.concat({name,email,phone,msg});
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error);
    }
}
const User = mongoose.model('User',userSchema);
module.exports = User;