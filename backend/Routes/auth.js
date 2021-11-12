const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello frm home page")
})

router.post("/register",(req,res)=>{
    res.json(req.body);
})

module.exports = router;