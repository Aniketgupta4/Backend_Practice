// router creation

const express = require("express")
const bcrypt = require("bcrypt")
const User = require("../Models/schema");

// **** make router and -> replace app by authRouter
const authRouter = express.Router();

// **** -> isme har route mai sirf "/" common hai so sirf "/" likhe -> per kya hota hai ki "/" hai so har ek req ise match match hoke auth.js pe jayegi bekar hai ye -> so apne se kuch "/auth" common karwa do ki har req 1 folder pe na jaye samjhe -> so ab route change hogya -> "/auth/register" hogya ab thik
// so routes ab -> "/auth/register" and "/auth/login"


// register user
authRouter.post("/register",async(req,res)=>{
 try{

    validateuser(req.body)  // pass data in validateuser
    
    // -> **** hash password and store in db after validation
    req.body.password = await bcrypt.hash(req.body.password,10)

    await User.create(req.body)
    res.send("user registered successfully")
   }
   catch(err){
    res.send("error occured"+err.message)
   } 
})


// login user
authRouter.post("/login",async(req,res)=>{
   try{
      const people = await User.findOne({emailId:req.body.emailId}) // use findOne : ({}) -> and data is in key:value pair
     // ********** jo ye people ye object hai kyuki findone se koi 1 user fetch hoke ayega db se so people object hua na -> so ye people (object) schema class ke methods ko use**** kar shakta hai 
 
// ----> -------------------------------------------------------     
     
     // const IsAllowed = await bcrypt.compare(req.body.password,people.password)
     // **** use this method call karega people object 
     const IsAllowed = people.VERIFYPASSWORD(req.body.password); // pass karray hai ki schema pe use kar shake

// -------------------------------------------------------
      if(!IsAllowed)
         throw new Error("invalid credentials")
// ----> ------------------------------------------
      // **** so ab yaha object call karega schema class ke method and jwt ko as a function call karega 
      // const token = jwt.sign({_id:people._id,emailId:people.emailId},"Aniket@1234",{expiresIn:"2d"}) // expireIn dena ho do ni toh ni do not mandatory
      
       const token = people.GETJWT();
// ------------------------------------------     
      res.cookie("token",token) // cookie ke ander set hora hai token
      res.send("login successfully")

   }catch(err){
      res.send(err.message)
   }
})



module.exports = authRouter;