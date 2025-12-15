// 1) rateLimiter -> by sliding window

const redisClient = require("../config/redis");


// ratelimiter -> by fixed window
// const rateLimiter = async (req,res,next) => {
//    try{
//      const ip = req.ip; // ip nikalo -> agar postman se req karo gai so toh ipv6 ayega ::1 -> warna waise req ayegi so ipv4 proper ip ayega

//      const no_of_req = await redisClient.incr(ip); // incr -> kya karta hai ki -> if ip exist ni karti in redis so create ip in redis and maintain count for ip and inc the count when req ayi by this same ip -> ip:count -> ip:1 then again req ayi toh inc hogi req -> ip:2 and so on -> and return count

//      if(no_of_req>60){ // count 60 se jyada ni mar shakta in 1 hours
//         throw new Error("user limit excedded")
//      }

//      if(no_of_req == 1){ // agar koi pehli baar aya hai so uska ttl set karna hoga -> ki 60 min tk rakhe ye -> and iske baad delete kardo isko 
//         await redisClient.expire(3600);
//      }

//      next();
   
//     }catch(err){
//      console.log(err.message);
//    }
// }


// ratelimiter -> by sliding window




module.exports = rateLimiter;


