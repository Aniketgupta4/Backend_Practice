// 1)**** SCHEMA LEVEL VALIDATIONS -> if koi bhi mandatory fields fill ni karega so show error and conditions bhi fullfill karni chaiye tab hai db pe save hoga warna show error

// 2)**** jab hm update karte hai so validation check ni hoti direct update kar deta hai without validations so 
// **** {"runValidators":true} likhna padega in server so validate hoga update karne se pehle sari fields
// 3) {timestamps:true} -> schema pe last pe add karne se pata chal jayega user kab register hua uska date and kab kuch update kara uska date time pata chal jayega and so hm detial nikal shakte hai last 1 , 2 years pe kitne users aye hai

// 4) **** API LEVEL VALIDATIONS -> but why api level validation -> API validation pehle hi input validate kar deta hai -> (Fast response, better UX, DB safe)
// -> Schema ensures database safety. API ensures user safety + better experience.

const mongoose = require("mongoose")
const {Schema} = mongoose

   const userSchema = new Schema({ // create schema like object
    
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


const User =  mongoose.model("user",userSchema);
  
module.exports = User