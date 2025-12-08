// Mongoose (library of mongodb)

// -> **** mongodb is schema less 
// -> schema -> schema fix rule(fields) ki yahi yahi bs bhej shakta hai user -> warna user kuch bhi data field pe bhej shakta hai and db bhar jayega
// ex -> {
//      name:string,
//      age:int
//       }
// -> schema hai fix hai yahi field bs user data send kar shakta hai -> apne se kuch bhi ni bhej shakta hai -> so db safe rahega

// -> **** and schema pe validations lagana ki example phone number 10 digit ka so -> ye sab karna mai mongodb se bohot code likhna padega
// -> ****** and yahi sab mongoose se bohot easy way se ho jata hai


// -> image1 -> mongoose is build on top of mongodb 
// -> **** express -> interact with mongoose -> and mongoose interact with mongodb -> mongodb interact with main database
// -> mongoose se interact easy hai bohot as compare to mongodb
// -> mongoose is like a js object -> and modifications easily -> changes direct reflect in db easily
 
//   ////user////              //////mongoose/////            ////database////
//                 <----->       like js object    <---->     reflect in db
//                                                 changes

// **** user baat karta hai mongoose se ki ye change karna hai in db and mongoose direct changes in db -> with easy commands

// install mongoose by -> npm i mongoose

