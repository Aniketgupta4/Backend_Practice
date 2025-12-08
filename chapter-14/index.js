const express = require("express")
const app = express()
// **** connect db -> but pehle server listen karra hai and db baad mai -> so error aa shakta hai some time so dont require
// require("./db")
// ******** first connect db then listen -> so export karo by db and yaha import karo 
const main = require("./dbconnection");
const User = require("./Models/schema");



app.use(express.json())



// CRUD OPERATIONS


// POSTMAN -> karo use postman and end requests
// -> get(read) -> localhost:3000/info
app.get("/info",async(req,res)=>{
    const ans = await User.find({});
    res.send(ans);
})


// -> post(add) -> localhost:3000/info
// **** control in db(a/c to schema work) -> postman se kuch extra field add karke bhej ray ho so wo usko db add ni karegi only valid fields ko add kar dega bs
app.post("/info",async(req,res)=>{
    const ans = new User(req.body);
    await ans.save();
    res.send("updated successfully")

    // or

    // ***** -> network call -> error prone always so use try catch

   //  try{
    // await User.create(req.body);
    // res.send("updated successfully")
   // }
//    catch(err){
//     res.send(err);
//    }

})


// delete -> localhost:3000/info
app.delete("/info",async(req,res)=>{
  await User.deleteOne({name:"aniket"})
  res.send("user deleted")
})


// put(update) -> localhost:3000/info
app.put("/info",async(req,res)=>{
    const result = await User.updateOne({name:"aniket"},{age:28})
    res.send("updated successfully");
})


// -> **** isko pehle likh diye so ab db connect first then server runs
main()
.then(()=>{console.log("connected to db")
app.listen(3000,()=>{
    console.log("listening at port 3000")
})
})
.catch((err)=>console.log("error"))

// **** always -> db first then server
// connected to db
// listening at port 3000
