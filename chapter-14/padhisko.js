// 1) connect with cluster 
// 1.1) make db -> "--------------/db_name" connection string pe / ke baad db bana shakte hai
// 2) make schema
// 3) create model -> collection create karna table create karna
// -> **** User collections ka naam diye per -> in mongodb ye users ho jayega by default always
// -> **** __v:0 -> in mongodb -> means document {} entry pe kitne baar changes/updation hua hai iska info v rakhta hai -> 1 change hua in {} so iska v update ho jayega -> __v:1
// 4) -> **** kya karo ki models ko alag karde and db connection alag kardo


const mongoose = require("mongoose")
const {Schema} = mongoose

async function main(){

    // s1 -> connection                 s 1.1) last pe /db_name likho create hai toh no issue warna db create ho jayega but cluster wala url hone chaiye yaha pe
   await mongoose.connect("mongodb://127.0.0.1:27017/coderarmydemo")

   // s2 -> Schema
   const userSchema = new Schema({ // create schema like object
      name:String,
      age:Number,
      city:String,
      gender:String
   })
// -> **** user inme se kuch bhi send karega mongoose db pe store kara lega compulsary ni hai ki 4 ro ko fill kare


 // s3 -> create model(collection/table) -> this user is like a class -> and we create multiple objects of a class
 const User =  mongoose.model("user",userSchema);
  // "user" -> collection name(class) and userSchema is type(fields / entities of class)


// ---------------------- DONT DO HERE -> PERFORM CRUD BY APIS ----------------------------

 // -----> create objects of class / model -> and this info insert and save in db


//   const user1 = new User({name:"aniket",age:20,city:"shahdol",gender:"male"})
//   await user1.save()

    //     or

//    await User.create({name:"aniket",city:"shahdol"})


// -> multiple entries
//    await User.insertMany([{name:"aniket",age:25},{name:"anikita",age:22}])


// image 2 -> multiple operations are there 

// -> find()
// const ans = await User.find({})
// console.log(ans)

// -> find document by particular field
// const res = await User.find({name:"aniket"})
// console.log(res)

// ---------------------------------------------------------------------

}


// -> isko index.js pe likh do ki pehle db chale then server chale and pehle export karlo 
// main()
// .then(()=>console.log("connected to db"))
// .catch((err)=>console.log("error"))


module.exports = main;