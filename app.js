const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Welcome to MERN Project')
})

app.listen(port,(req, res) => {
    console.log("hello from mern project ");
});