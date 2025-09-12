// postman basics

const express = require("express");
const app = express();

// but undeifned aara hai -> so we have to do parsing
 // parsing
 app.use(express.json());
 


// normal
// app.use("/user",(req,res)=>{
//     res.send({"name":"aniket"});
// })




// http methods -> get , post , patch , put , delete

// get -> data fetch kara paye get method se -> simple hai bohot
app.get("/user",(req,res)=>{
// console.log(req) -> bohot sare methods hote hai
    res.send({"name":"aniket"});
})



// post -> data ko bhejte hai frontend se backend to ki db pe store kara de
// direct post request ni kar shakte so we use -> postman to send request or otherwise full ui banao then submit karo form toh req send hogi
// post method ke sath bohot sari chize jati hai frontend pe -> so method batani padti hai method="post" -> b/c "/user" is naam ke multiple method ho shakte hai get and all
// **** body ke ander data bhej dete hai in post

// POSTMAN is used for api testing -> post req direct ni mar shakte so use postman otherwise forms create karo in forented 
// **** postman ke pass req param jata hai so usme se read kar leta hai postman and samjh jata hai kisme kya karna hai -> b/c localhost:4000/user for get and same for post so kaise pta chalge by req params -> isko inder method hote hai and all so postman samjh jata hai
app.post("/user",(req,res)=>{
   
    console.log(req.body); // jo data aara hai send karne se postman se
    console.log(req.body.age);
    // **** but undeifned aara hai -> so we have to do parsing (so wo json se js object pe convert ho jayega)-> so concept aya json vs js object
    // use -> app.use(express.json()) -> so data received 

   // res.send("data saved");
})




app.listen(4000,()=>{
    console.log("listening at server 4000");
})