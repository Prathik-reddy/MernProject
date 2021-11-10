const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const DB = "mongodb+srv://Prathik:Prathik%4010mondb@cluster0.wr5r0.mongodb.net/mernProject?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
})
.then(()=> {console.log("Connected to Mongo successfully");})
.catch((error)=> {console.log("Error Occured "+error)});

const  middleware = (req,res,next) => {
    console.log("hello from middleware");
    next();
}

app.get('/', (req, res) => {
    res.send('Welcome to MERN Project')
})

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

app.listen(port,(req, res) => {
    console.log("hello from mern project ");
});