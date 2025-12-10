// 1) **** API LEVEL VALIDATIONS -> but why api level validation -> API validation pehle hi input validate kar deta hai -> (Fast response, better UX, DB safe)
// -> Schema ensures database safety. API ensures user safety + better experience.
// -> ******** apis ke uper hi check karlo ki firstname hai ki ni and all yahi pe check karlo or aage ni jane do -> **** ki faltu ki db call na ho
// -> because industry pe pen call paisa lagta hai -> so db pe ni jao pehle api pe hi check karlo and db call reduce karo -> so db call reduce and ux increases
// -> **** so functions api level validations ke hmko likhne padengai

// ---------------------------------------
// **** password validation karo -> ki speccial char use karo 1 letter capital -> ye sab karo api level pe 
// email validation -> ki @ use ho and valid email id ho -> do this in api level
// **** yaha pe ni karengai kyuki apan ko apni clean rkhni hai so do this in any another file -> validateuser.js
    

const express = require("express")
const app = express()
const main = require("./dbconnection");
const User = require("./Models/schema");
const validateuser = require("./utils/validateuser")
const bcrypt = require("bcrypt")

app.use(express.json())

 


// register user
app.post("/register",async(req,res)=>{
 try{

// ------- API VALIDATION FUNCTION (// **** yaha pe ni karengai kyuki apan ko apni clean rkhni hai so do this in any another file) ------
    // -> ******** apis ke uper hi check karlo ki firstname hai ki ni and all yahi pe check karlo or aage ni jane do -> **** ki faltu ki db call na ho
    // -> because industry pe pen call paisa lagta hai -> so db pe ni jao pehle api pe hi check karlo and db call reduce karo -> so db call reduce and ux increases
    // -> **** so functions api level validations ke hmko likhne padengai
    
   //  const mandatoryField = ["firstName","emailId","age","password"]
   //  const IsAllowed = mandatoryField.every((k)=>Object.keys(req.body).includes(k))
   //  if(!IsAllowed)
   //      throw new Error("fields missing")
    // ---------------------------------------
    // **** password validation karo -> ki speccial char use karo 1 letter capital -> ye sab karo api level pe 
    // email validation -> ki @ use ho and valid email id ho -> do this in api level
    // **** yaha pe ni karengai kyuki apan ko apni clean rkhni hai so do this in any another file
 // -------------------------------------------   
    
    validateuser(req.body)  // pass data in validateuser
    
    // -> **** hash password and store in db after validation
    req.body.password = await bcrypt.hash(req.body.password,10)

    await User.create(req.body)
    res.send("user registered successfully")
   }
   catch(err){
    res.send("error occured"+err.message)
   } 
})


// login user

// ----> **** kabhi ye error send ni karo ki email is incorrect -> so hacker ko pata chal jayega ye email db pe ni hai -> so risk hai so always send -> invalid credentials
app.post("/login",async(req,res)=>{
   try{
     
      const people = await User.findById(req.body._id)
     
      if(!(req.body.emailId === people.emailId))
         throw new Error("invalid credentials")
      
      const IsAllowed = await bcrypt.compare(req.body.password,people.password)

      if(!IsAllowed)
         throw new Error("invalid credentials")
   
      res.send("login successfully")

   }catch(err){
      res.send(err.message)
   }
})
// **** -> after login -> again user send req to server ki meko post upload karna hai so server ko kaise pata chalega ki ye same user hai jo login kiya hai ki ni -> by Authentication 
// solution1 -> image1 -> pehle again and again id password send karna hota tha and req fulfill hoti thi -> bekar tha bar bar id password send karna padta tha -> means bar bar db call that is bekar
// **** solution2 -> image2 -> by session id -> jaise ap login kare apko ek session id milegi then ap next time aaogai toh session id match karke apko login hone dega -> session id not store in db warna bar bar db call inc hoga 
//                          -> and session id ko agar server pe store kare toh bohot sare servers hai toh sabmai distribute karna hoga session id in multiples servers -> overhead hai ki multiple servers ke sath share karna 

// -> **** solution3 -> digital signature -> **** so aysa kuch jugar ki isko kahi store ni karna pade -> token -> ex college ka id card -> i.e. digital signature
//                   -> aysa ki mai server ko msg karu kuch ex -> send 100 rupee to aniket -> but isme kuch cher khanai na hui ho to maintain meassage integrity -> no cherkhani msg ke sath -> so use hashing for a particular message image3 -> ki msg ke sath hashcode bhi send karengai
//                   -> so server pe check kar lega ki hashcode and msg same hai na ki ni -> verify ho jayega msg sahi hai ki ni -> and hacker ko both signature and msg dono milgya so ye change kar shakte hai -> so how to confirm **** original user ne msg send kara hai
//                   -> **** so digital signature introduced -> ki msg change kardiya hacker but ab ye rahega ki koi or user ne msg change kiya hai -> this is done by digital signature  
//                   -> image4 -> so kya hoga ki 2 keys are there public key and private key so -> send public to everyone and private key bs hogi msg sender ke pass so agar msg encrypt private key se kare hai toh decrypt public key se hi karengai and vice versa -> public se encrypt kare toh private se decrypt hoga
//                   -> image5 -> so hashcode ko encrypt karo by privatekey se and send msg + hashcode to server and server apni public key se decrypt kar shakta hai msg and get ****hashkey and isko pata chal jayega ki msg sahi hai ki ni ya phir isme cher khani hui hai kuch and msg user1 ne hi bheja hai 
//                   -> image6 -> **** and agar bich mai hacker ne hi msg + hashcode leliya toh and decrypt kar liya msg ko get hashkeya se hashcode of a and modify kardiya kuch thik toh newhashcode ayega and send to server -> thik but jab server hashkeya se match karega msg se toh wo match ni hoga kyuki server key pass toh hashkeya thi and msg edit ne hacker ne kar diya so hashcode match ni hoga so fraud yaha pe pakda jeyega  
// -> **** but without digital signature wagera normal hashcode + msg send hua and hacker ne chane kara so server pe sirf hashcode and msg check kiya same aya fraud not match -> so digital signatue aya ki msg correct hai and msg user ne hi bheja hai kisi hacker ne ni bheja hai -> by concept of public and private key and encrypt decrypt but jo **** hashkeya generate hau hashcodea se ye digital signature hota hai main chiz 


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
