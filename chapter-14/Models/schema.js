const mongoose = require("mongoose")
const {Schema} = mongoose

   const userSchema = new Schema({ // create schema like object
      name:String,
      age:Number,
      city:String,
      gender:String
   })


const User =  mongoose.model("user",userSchema);
  
module.exports = User