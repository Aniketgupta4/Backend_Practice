// 1) logout feature by redis -> redis is key value pair based db
   // s1) authenticate kao ki authenticate user hai ki ni by auth middleware
   // s2) ki blocked users ko db pe store karaye 


const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const User = require("../Models/schema");
const redisClient = require("../config/redis");
const userauth = require("../middleware/userauth");

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




// **** adding logout feature -> by redis
authRouter.post("/logout",userauth,async(req,res)=>{
   try{
   // s1) authenticate kao ki authenticate user hai ki ni by auth middleware
   // s2) ki blocked users ko redis db pe store karaye and future pe kabhi use na ho -> store blocked token is in key : value pair

      // 1) -> way1 ->
      // const {token} = req.cookies;
      // await redisClient.set(`token:${token}`, "Blocked"); // store karao key:value in redis db   
      //    // **** itne second baad delete kar dena redis se token ko -> but ye best practice ni hai apan value hardcode karray hai ayse ni karo ki har token ko 30000 second baad delete kardo manlo koi user 30 din ka valid hone ka token laya hoga toh apan ne toh bekar kar diya na hardcode karke
      //    // **** let token expiry set hai 30 minute thik and suppose user ne 20 minute time pass kara login karke and logout kar diya so sirf 10 min bs valid hai token thik ab 20 min use karne ke baad -> so mai redis pe isko sirf 10 min bs save karu na ki ek hardcode value ke hisab se store karu let hardcode value redis pe 1 hrs hai so mai 1 hrs kyu store karu aysa kuch karu ki sirf 10 min valid hai extra so redis pe sirf 10 min bs store ho then delete ho jaye
      // await redisClient.expire(`token:{token}`,30000)


      // 2) -> way2 -> more optimised way -> so not hardcode value so pehle expiry time nakalo token ka then aage kaam karo -> 
      const {token} = req.cookies;
      const payload = jwt.decode(token) // isme se 1 field hame expire field milega token ka in seconds

      await redisClient.set(`token:${token}`, "Blocked");
      await redisClient.expireAt(`token:${token}`,payload.exp); // expireAt -> calculate karega ki jab token create hua tha us date se kab tk ka bacha hai and kb tk store karna hai in redis db pe token ko -> in seconds pe time hota hai
 // **** abhi bhi flaws hai ki user wahi token bhejra hai jo maine create kiya hai koi farzi token toh ni hai na mere db ko kharab karne ke liye so user ko authentciate karlo pehle -> so use auth middleware in start
 // **** -> so ab authenticate hoga ki sahi token hai ki ni all good
 // ******** -> add one thing in userauth.js ki check karo ki kahi token redis db pe toh ni hai na expire wala toh ni hai na so iske liye bhi likho ab userauh pe 

      res.cookie("token",null,{expires:new Date(Date.now())});
      res.send("logged out succesfully");
   }catch(err){
      console.log(err.message);
   }
})



module.exports = authRouter;