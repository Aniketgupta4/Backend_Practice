// authticate user -> token hai ki ni hai -> do same work in all routes ex -> delete logout and all -> same code again write again again in diff diff places -----> ******** so introduced middleware
// good way to write code -> so write all code in middleware file

const jwt = require("jsonwebtoken")
const User = require("../Models/schema");
const redisClient = require("../config/redis");


const userauth = async(req,res,next) =>{ 
   try{
    
    const {token} = req.cookies; 
   
    if(!token){
      throw new Error("token doesnt exist");
    }
    const payload = jwt.verify(token,process.env.SECRET_KEY) // returns -> payload and if use credentials match then ok otherwise error
    
    const {_id} = payload;
    
    if(!_id){
      throw new Error("id is missing");
    }

    const result = await User.findById(_id)
  
    if(!result){
      throw new Error("User doesn't exists");
    }

 // **** token valid hai ki ni dekh lo kahi redis pe toh store ni hai na invalid wala toh ni bhej ra na user
    const IsBlocked = await redisClient.exists(`token:${token}`) 
    if(IsBlocked){
      throw new Error("Invalid Token");
    }


    req.result = result; // yaha se bhej ray hai ki waha use kar shake direct

    console.log("user authenticated")

    next(); // user auth hogya next hojao ab

   }catch(err){
    res.send("error occured"+err.message)
   }
}



module.exports = userauth;
