// router creation

const express = require("express")
const bcrypt = require("bcrypt")
const User = require("../Models/schema");
const userauth = require("../middleware/userauth")

// **** make router and -> replace app by authRouter
const userRouter = express.Router();



// **** -> "/user" -> ki jagay "/" kardo -> kyuki index.js pe "/user" common bana diye hai 

// get user + middleware
userRouter.get("/",userauth,async(req,res)=>{
   try{
    res.send(req.result) // auth wale se aya hai
   }catch(err){
    res.send("error occured"+err.message)
   }
})


// delete user + middleware
userRouter.delete("/:id",userauth,async(req,res)=>{
    try{
      // authenciate here also same code again -----> ******** so introduced middleware -> and write code in middleware file for auth
      await User.findByIdAndDelete(req.params.id)
       res.send("deleted successfully")
    }catch(err){
      res.send("error occured"+err.message)
    }
})


module.exports = userRouter;