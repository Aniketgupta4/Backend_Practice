// 1) **** API LEVEL VALIDATIONS -> but why api level validation -> API validation pehle hi input validate kar deta hai -> (Fast response, better UX, DB safe)
// -> Schema ensures database safety. API ensures user safety + better experience.
// -> ******** apis ke uper hi check karlo ki firstname hai ki ni and all yahi pe check karlo or aage ni jane do -> **** ki faltu ki db call na ho
// -> because industry pe pen call paisa lagta hai -> so db pe ni jao pehle api pe hi check karlo and db call reduce karo -> so db call reduce and ux increases
// -> **** so functions api level validations ke hmko likhne padengai

const express = require("express")
const app = express()
const main = require("./dbconnection");
const User = require("./Models/schema");

app.use(express.json())


// CRUD OPERATIONS

// POSTMAN -> karo use postman and send requests


// register user
app.post("/register",async(req,res)=>{
 try{

    // ------- API VALIDATION FUNCTION ------
    // -> ******** apis ke uper hi check karlo ki firstname hai ki ni and all yahi pe check karlo or aage ni jane do -> **** ki faltu ki db call na ho
    // -> because industry pe pen call paisa lagta hai -> so db pe ni jao pehle api pe hi check karlo and db call reduce karo -> so db call reduce and ux increases
    // -> **** so functions api level validations ke hmko likhne padengai
    
    const mandatoryField = ["firstName","emailId","age"]
   // const IsAllowed = Object.keys(req.body).every((keys)=>mandatoryField.includes(keys))  // **** isme issue hai ki bohot sari fields hai per sief 3 hi mandator hai but ye function baki ke liye false dega na toh -> **** use every wala
    const IsAllowed = mandatoryField.every((k)=>isObjectIdOrHexString.keys(req.body).includes(k))
    if(!IsAllowed)
        throw new Error("fields missing")
    // ---------------------------------------

    await User.create(req.body)
    res.send("user registered successfully")
   }
   catch(err){
    res.send("error occured"+err.message)
   } 
})


// get all user
app.get("/info",async(req,res)=>{
   try{
    const result = await User.find({});
    res.send(result)
   }catch(err){
    res.send("error occured"+err.message)
   }
})


// get user by id
app.get("/user/:id",async(req,res)=>{
   try{
    const result = await User.findById(req.params.id)
    res.send(result)
   }catch(err){
    res.send("error occured"+err.message)
   }
})


// delete user
app.delete("/user/:id",async(req,res)=>{
    try{
      await User.findByIdAndDelete(req.params.id)
       res.send("deleted successfully")
    }catch(err){
      res.send("error occured"+err.message)
    }
})


// update user
// **** pehle id nikalna hoga and jo hoga usko update karwana hoga -> by destructuring
app.patch("/user",async(req,res)=>{
    try{
       const {_id,...update} = req.body
       await User.findByIdAndUpdate(_id,update,{"runValidators":true})
       res.send("updated successfully")
    }catch(err){
      res.send("error occured"+err.message)
    }
})


main()
.then(()=>{console.log("connected to db")
app.listen(3000,()=>{
    console.log("listening at port 3000")
})
})
.catch((err)=>console.log("error"))
