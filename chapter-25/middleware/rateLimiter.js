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

const windowsize = 3600;  // total time 60 min
const maxrequest = 60 ;

const rateLimiter = async (req,res,next) => {
   try{
      const key = `IP${req.ip}`;
      const current_time = Date.now()/1000;  // get time in ms
      const window_time = current_time - windowsize; // itne wale time se pehle sabko hatana hai
      
      await redisClient.zRemRangeByScore(key,0,window_time) // range ki 0 se max size tk of window sabko hata do
      
      const numberofreq = await redisClient.zCard(key); // kitni req bachi hai ab
      if(numberofreq>=maxrequest){
         throw new Error("number of request excedded");
      }

      await redisClient.zAdd(key,[{score:current_time,value:`${current_time}:${Math.random()}`}]) // or use crypto library too
      // request is added

      // key ttl hai unko increase karna jaise key ayegi -> apan inc karte jayengai next 1 ghante ke liye -> ex -> 12:59 pe total req = 58 so ab ye set karenga ki 1:59 tk sief 2 hi req bs kar shakta hai 
      await redisClient.expire(key,windowsize);

      next();
      
   }catch(err){
      console.log(err.mesage)
   }
}



module.exports = rateLimiter;


