// 1) optimised code for last part
// 2) logout in auth.js

const express = require("express")
const app = express()
const main = require("./dbconnection");
const cookieParser = require("cookie-parser")
require('dotenv').config()
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const redisClient = require("./config/redis");

app.use(express.json())
app.use(cookieParser());



// /login and /regiter ko routes -> auth.js pe daldo


// **** using approuter -> neat and clean index.js hogya -> readability increases ab 
app.use("/auth",authRouter); // **** -> isme har route mai sirf "/" common hai so sirf "/" likhe -> per kya hota hai ki "/" hai so har ek req ise match match hoke auth.js pe jayegi bekar hai ye -> so apne se kuch "/auth" common karwa do ki har req 1 folder pe na jaye samjhe -> so ab route change hogya -> "/auth/register" hogya ab thik
app.use("/user",userRouter); // **** -> isme "/user" common hai har route pe so hm "/user" likh ray hai -> and user.js mai se "/user" remove karke "/" kardo
 



// **** ensure karo ki pehle db se connect ho then user connect ho -> so redis.js pe call karray thay redis ko so wo yaha karo
// -> Good way to write code -> ki pehle db connect hongai then user connect hoga

// const InitializeConnection = async () => {
//     try{
//         await redisClient.connect();
//         console.log("connected to redis");

//         await main();
//         console.log("connected to mongodb")

//         app.listen(process.env.PORT,(req,res)=>{
//             console.log("listening to port 3000");
//         })
//     }catch(err){
//         console.log(err.message);
//     }
// }
// InitializeConnection();




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





// -> **** little confusing way to write code
// main()
// .then(async()=>{console.log("connected to db")
// app.listen(process.env.PORT,()=>{
//     console.log("listening at port 3000")
// })
// })
// .catch((err)=>console.log("error"))

