const router = require("express").Router();

const User = require("../model/User");

//REGISTER
router.post("/register", (req.res) =>{
    const newUser = new User({
        username: req.body.username
    })
}) 
