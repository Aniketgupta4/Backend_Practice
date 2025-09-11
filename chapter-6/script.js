// node script.js -> new change karne pe again start karo -> so nodemon use karo -> itself start server -> npm i -g nodemon

// **** internally express use method use http of node ka hi 

const express = require("express")

const app = express();

// --------------------------------------------------

// normal
// app.use((req,res)=>{
//   //  res.send("hello");
//    res.send({"name":"aniket","age":"24"});
//   // res.send(["a","b",12]);
// })


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

// ? -> question mark use karne ? iske pehle wala aord optional ban jata hai -> so search by localhost:4000/hoe or localhost:4000/ho?e
// app.use("/hom?e",(req,res)=>{
//   res.send("home page");
// })


// + -> use karne se bohot sare + ke pehle wala work bohot baar likh shakte hai -> localhost:4000/hommmmmmme 
// app.use("/hom+e",(req,res)=>{
//   res.send("home page");
// })


// * use karne se bohot sare words likh shakte hai m ke baad -> localhost:4000/hom hcjhbvmhgvgj e 
// app.use("/hom+e",(req,res)=>{
//   res.send("home page");
// })

// ----------------------------------------------

// use params (****dynamically karo) -> /:id -> kuch bhi de shakte hai ab yaha pe -> hardcode ni karo ki -> localhost:4000:aniket is type se bohot sare user ke liye banana padega

app.use("/about/:id",(req,res)=>{
  console.log(req.params);
  res.send("about page");
})

// or multiple use /:----/:----  -> **** dynamically manage karray hai apan

app.use("/about/:id/:user",(req,res)=>{
  console.log(req.params);
  res.send("about page");
})


// **** "/about/:id/:user" -> routing and callback function -> (req,res)=>{console.log(req.params);res.send("about page");})

app.listen(4000,()=>{
    console.log("listening to port 4000");
})

