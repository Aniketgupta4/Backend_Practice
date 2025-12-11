// JWT IN LOGIN 
   // send jwt token -> but cookie ke ander rakh ke bhejte hai jwt token ko -> go yo postman and see in login karne baad in cookie pe token
   // npm i jsonwebtoken to install it
   // **** cookies ko web broswer handle karta hai automatically -> and after login har route pe self chipak se cookie hamare sath aati hai
   // cookie ko dekhne liye bhi parse karana hota hai so use -> cookie-parser -> npm i cookie-parser
   // **** verify karo /info pe ki user wahi hai ki ni -> benefit -> abhi tk hm user ko find karte thay na /user/:id se toh ab sirf /user karke hi cookie ki help se find kar shakte hai -> so userid expose ni karna pada
   
const express = require("express")
const app = express()
const main = require("./dbconnection");
const User = require("./Models/schema");
const validateuser = require("./utils/validateuser")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")

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

// -----------------------------------------   
      // send jwt token -> but cookie ke ander rakh ke bhejte hai jwt token ko -> go yo postman and see in login karne baad in cookie pe token
      // npm i jsonwebtoken to install it
      // **** cookies ko web broswer handle karta hai automatically -> and after login har route pe self chipak se cookie hamare sath aati hai
      // cookie ko dekhne liye bhi parse karana hota hai so use -> cookie-parser -> npm i cookie-parser
      
      //                         payload                                key         token valid ifor 2 days           -> header self include ho jayega
      const token = jwt.sign({_id:people._id,emailId:people.emailId},"Aniket@1234",{expiresIn:"2d"}) // expireIn dena ho do ni toh ni do not mandatory
      res.cookie("token",token) // cookie ke ander set hora hai token
// -----------------------------------------------------

      res.send("login successfully")

   }catch(err){
      res.send(err.message)
   }
})




// get all user
app.get("/info",async(req,res)=>{
   try{

// -------------------------------------------------
    // **** verify karo /info pe ki user wahi hai ki ni  
    const payload = jwt.verify(req.cookies.token,"Aniket@1234") // returns -> payload and if use credentials match then ok otherwise error
    console.log(payload)
// ------------------------------------------------

    const result = await User.find({});
    // see cookies 
    console.log(req.cookies)
    res.send(result)
   }catch(err){
    res.send("error occured"+err.message)
   }
})


// **** verify karo /info pe ki user wahi hai ki ni -> benefit -> abhi tk hm user ko find karte thay na /user/:id se toh ab sirf /user karke hi cookie ki help se find kar shakte hai -> so userid expose ni karna pada
// get user 
app.get("/user",async(req,res)=>{
   try{
// -------------------------------------------
    const payload = jwt.verify(req.cookies.token,"Aniket@1234") // returns -> payload and if use credentials match then ok otherwise error
    const result = await User.findById(payload._id)
// -------------------------------------------
    res.send(result)
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

