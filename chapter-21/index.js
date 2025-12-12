// 1) schema methods
const express = require("express")
const app = express()
const main = require("./dbconnection");
const User = require("./Models/schema");
const validateuser = require("./utils/validateuser")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const userauth = require("./middleware/userauth")
require('dotenv').config()
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");


app.use(express.json())
app.use(cookieParser());



// /login and /regiter ko routes -> auth.js pe daldo


// **** using approuter -> neat and clean index.js hogya -> readability increases ab 
app.use("/auth",authRouter); // **** -> isme har route mai sirf "/" common hai so sirf "/" likhe -> per kya hota hai ki "/" hai so har ek req ise match match hoke auth.js pe jayegi bekar hai ye -> so apne se kuch "/auth" common karwa do ki har req 1 folder pe na jaye samjhe -> so ab route change hogya -> "/auth/register" hogya ab thik
app.use("/user",userRouter); // **** -> isme "/user" common hai har route pe so hm "/user" likh ray hai -> and user.js mai se "/user" remove karke "/" kardo
 


main()
.then(()=>{console.log("connected to db")
app.listen(process.env.PORT,()=>{
    console.log("listening at port 3000")
})
})
.catch((err)=>console.log("error"))

