const express = require("express");

const app= express();

app.post("/user/signup", function(req,res){
    res.json({
        message:"Singup endpoint"
    })
})

app.post("/user/signin", function(req,res){
    res.json({
        message:"Singin endpoint"
    })
})

app.get("/user/purchases", function(req,res){
    res.json({
        message:"Singup endpoint"
    })
})

app.get("/courses", function(req,res){
    res.json({
        message:"Singup endpoint"
    })
})

app.listen(3000);