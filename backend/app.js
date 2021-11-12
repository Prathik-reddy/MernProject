const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path:"./.env"});
const app = express();
const PORT = process.env.PORT || 8000;
require('./db/conn');

// to get the data which is in json format
app.use(express.json());
//Linking the routes from auth.js file
app.use(require("./Routes/auth"))

const  middleware = (req,res,next) => {
    console.log("hello from middleware");
    next();
}

app.get('/about',middleware, (req, res) => {
    console.log("Welcome to about");
    res.send('Welcome to MERN Project about page')
})

app.get('/contact', (req, res) => {
    res.send('Welcome to MERN Project contact page')
})

app.get('/login', (req, res) => {
    res.send('Welcome to MERN Project login page')
})

app.get('/signup', (req, res) => {
    res.send('Welcome to MERN Project signup page')
})

app.listen(PORT,(req, res) => {
    console.log(`Server running on port ${PORT} ` );
});