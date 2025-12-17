// ratelimiter 

const express = require("express")
const app = express()
const main = require("./dbconnection");
const cookieParser = require("cookie-parser")
require('dotenv').config()
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const redisClient = require("./config/redis");
const rateLimiter = require("./middleware/rateLimiter")


app.use(express.json())
app.use(cookieParser());


// **** ratelimiter koi kahi toh save karna hoga na -> so server pe rakhe hai
// -> **** sabse pehle Rate limiter implement karo ki agar kisi ki limit exceed hogi hai so yahi se usko aage ni jane -> reject kardo yahi hi
// -> **** basically ratelimiter laga ke apan db call less karray hai -> ki pehle rate limiter laga diye as a middleware agar ok hai then db call hoga otherwise kuch fraud hua toh kuch db call toh kam hogi na agar koi bohot sari req karra hai toh
app.use(rateLimiter); // **** basically rate limiter se apan ye niche wale ke calls bacha (reduce kar) ray hai apan


// **** using approuter -> neat and clean index.js hogya -> readability increases ab 
app.use("/auth",authRouter); // **** -> isme har route mai sirf "/" common hai so sirf "/" likhe -> per kya hota hai ki "/" hai so har ek req ise match match hoke auth.js pe jayegi bekar hai ye -> so apne se kuch "/auth" common karwa do ki har req 1 folder pe na jaye samjhe -> so ab route change hogya -> "/auth/register" hogya ab thik
app.use("/user",userRouter); // **** -> isme "/user" common hai har route pe so hm "/user" likh ray hai -> and user.js mai se "/user" remove karke "/" kardo




// ----> **** another optimised way ki ki dono db sath mai connect ho then isko baad user connect ho
const InitializeConnection = async () => {
    try{

        // **** dono db connect ho then niche wala chalega and agar db connect ni ho paya toh error show hoga ni chalega kuch
        await Promise.all([redisClient.connect(),main()]);
        console.log("DB Connected");

        app.listen(process.env.PORT,(req,res)=>{
            console.log("listening to port 3000");
        })
   
    }catch(err){
        console.log(err.message);
    }
}

InitializeConnection();




