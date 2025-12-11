// authticate user -> koi user aya after login so usko validate karna hoga wo valid user hai ki ni
// authticate user -> token hai ki ni hai -> do same work in all routes ex -> delete logout and all -> same code again write again again in diff diff places -----> ******** so introduced middleware
// -> so write all code in middleware file

// -> **** models db pe bhi functions/methods likh shakte hai -> schema ke methods/functions -> kyuki wo as a class react karti hai 
// methods are for reusability -> ki bar bar use kar shake methods ko jo bhi banane ho

const express = require("express")
const app = express()
const main = require("./dbconnection");
const User = require("./Models/schema");
const validateuser = require("./utils/validateuser")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const userauth = require("./middleware/userauth")

app.use(express.json())
app.use(cookieParser());
 



// login user

// ***********************JWT TOKEN**************************
app.post("/login",async(req,res)=>{
   try{
     // **** not use id here kyuki user ko thoda na pata hoga ki db ka id kya hai so use email(ye bhi unique hai)
      const people = await User.findOne({emailId:req.body.emailId}) // use findOne : ({}) -> and data is in key:value pair
     
      const IsAllowed = await bcrypt.compare(req.body.password,people.password)

      if(!IsAllowed)
         throw new Error("invalid credentials")


      const token = jwt.sign({_id:people._id,emailId:people.emailId},"Aniket@1234",{expiresIn:"2d"}) // expireIn dena ho do ni toh ni do not mandatory
      res.cookie("token",token) // cookie ke ander set hora hai token

      res.send("login successfully")

   }catch(err){
      res.send(err.message)
   }
})



// get user
// authticate user -> token hai ki ni hai -> do same work in all routes ex -> delete logout and all -> same code again write again again in diff diff places -----> ******** so introduced middleware
// good way to write code -> *************** so write all code in middleware file 
// app.get("/user",async(req,res)=>{
//    try{
//     // authticate user -> token hai ki ni hai -> do same work in all routes ex -> delete logout and all -> same code again write again again in diff diff places -----> ******** so introduced middleware
//     // good way to write code -> so write all code in middleware file
//     const {token} = req.cookies; 
   
//     if(!token){
//       throw new Error("token doesnt exist");
//     }
//     const payload = jwt.verify(token,"Aniket@1234") // returns -> payload and if use credentials match then ok otherwise error
    
//     const {_id} = payload;
    
//     if(!_id){
//       throw new Error("id is missing");
//     }

//     const result = await User.findById(_id)

//     res.send(result)
//    }catch(err){
//     res.send("error occured"+err.message)
//    }
// })


// get user + middleware
app.get("/user",userauth,async(req,res)=>{
   try{
    res.send(req.result) // auth wale se aya hai
   }catch(err){
    res.send("error occured"+err.message)
   }
})



// delete user + middleware
app.delete("/user/:id",userauth,async(req,res)=>{
    try{
      // authenciate here also same code again -----> ******** so introduced middleware -> and write code in middleware file for auth
      await User.findByIdAndDelete(req.params.id)
       res.send("deleted successfully")
    }catch(err){
      res.send("error occured"+err.message)
    }
})



main()
.then(()=>{console.log("connected to db")
app.listen(3000,()=>{
    console.log("listening at port 3000")
})
})
.catch((err)=>console.log("error"))

