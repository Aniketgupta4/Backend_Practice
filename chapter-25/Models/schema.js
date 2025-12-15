// 1) schema methods (agar banana hai toh bana shakte hai koi compulsary hai)

// create a User in schema is like a class -> and class call its variables , methods  
// why methods ? -> ki reusability increase ho
// methods syntax -> 

// **** userSchema.methods.functionname = function(){} 


const mongoose = require("mongoose")
const {Schema} = mongoose
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


   const userSchema = new Schema({

   // -> all these are variables of schema class  
     firstName:{
      type:String,
      required:true,
      minLength:3,
      maxLength:20
     },
     lastName:{
      type:String
     },
     age:{
      type:Number,
      min:5,
      max:70,
      required:true
     },
     gender:{
      type:String,
      // enum:["male","female"]
      // or
      validate(value){
         if(!["male","female"].includes(value))
            throw new Error("invalid gender")
      }
     },
     emailId:{
      type:String,
      unique:true,
      required:true,
      trim:true,      // if extra space agye so remove karke store karega in db
      lowercase:true,  // capital hai so usko lowercase pe karke store karega
      immutable:true    // email ko koi ni update kar shakta hai
     },
     password:{
      type:String,
      required:true
     },
     photo:{
      type:String,
      default:"This is the default photo"
     }

   },{timestamps:true})



// -> methods of schema class
// **** so in functions ko koi bhi object class ka use kar shakta hai 

userSchema.methods.GETJWT = function(){
   // const ans = jwt.sign({_id:people._id,emailId:people.emailId},"Aniket@1234",{expiresIn:"2d"})
       // or -> this use karray hai so function ayse hi banana arrow ni banana 
    const ans = jwt.sign({_id:this._id,emailId:this.emailId},process.env.SECRET_KEY,{expiresIn:"2d"})
    return ans;
} 


userSchema.methods.VERIFYPASSWORD = async function(Userpassword){  // index.js se password aya hai
   const ans = await bcrypt.compare(Userpassword,this.password)
   return ans;
}


const User =  mongoose.model("user",userSchema); // ***** this creates a class
  
module.exports = User