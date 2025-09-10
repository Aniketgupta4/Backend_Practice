// node script.js -> new change karne pe again start karo -> so nodemon use karo -> itself start server -> npm i -g nodemon

const express = require("express")

const app = express();

// --------------------------------------------------

// normal
app.use((req,res)=>{
  //  res.send("hello");
  // res.send({"name":"aniket","age":"24"});
  res.send(["a","b",12]);
})


//-------------------------------------------------------

// routing

// **** ye issue create karega "/" -> ki "/home" ya "/about" -> karengai so "/" wala hi ayega -> isko "/" remove kar diye so sab shai chalega -> this is due to ye alag se routing handle karta hai b/c sabse pehle ye "/" dekhe ga kisi mai bhi ex: in "/about" pehle "/" aya so "/" isme pehle ghush gya and show output -> and niche check hi ni karta hai 
// **** solve it by isko sabse last mai likho
// app.use("/",(req,res)=>{
//   res.send("page");
// })

// app.use("/home",(req,res)=>{
//   res.send("home page");
// })

// app.use("/about",(req,res)=>{
//   res.send("about page");
// })

// working well -> last mai likho so start matching from starting
// app.use("/",(req,res)=>{
//   res.send("page");
// })

// ----------------------------------------------------



app.listen(4000,()=>{
    console.log("listening to port 4000");
})

