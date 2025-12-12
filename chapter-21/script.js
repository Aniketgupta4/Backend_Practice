// 2) environment variables

// -> basically pure code ko github pe upload karte hai thik per -> per agar hm apni sensitive info jaise mongo-atlas ka url , secret-key of jwt and all bhi direct upload kar dete hai toh -> baki log bhi use kar shakte hai hamara db and all -> so dont hardcode the values thik 

// -> **** so environment variables aya 

// -> .env file create karo and put thing in key value pair

// -> **** .env ko kabhi bhi github pe ni dalna hai -> isko gitignore pe daldo

// -> **** Testing hogi ab final deploy se pehle -> so ab har imp chiz 1 file pe hai .env and testing kisi temporary db pe hoga and secret key bhi and port bhi kuch temporary hoga so easy hogya na change karna in .env file only -> code cherni ki jarurat ni hai ab 

// -----> **** process.env.______ (access .env variables) -> so process.env kya hai ?
// -> image1 -> process.env is global object -> but kaise access karta hai -> so we have to install dotenv -> npm i dotenv
// -> write this in index.js -> require('dotenv').config()
// -> so ye .env se connect karata hai baki sabko by -> process.env





// image2 -> in any industry level project minimum 40-50 apis apan banate hai so kya unhe ek sath index.js pe thoda na rakhte hai -> code messy ho jayega yr -> so best way to write code by express router
// image3 -> apan inko alag alag folder pe baat dengai same same type ki apis ko ek folder pe is type se -> so routing ka concept aya 
// -> so make folder -> routes -> auth.js -> so isme same type ki apis daldo
// 3) **** -> express router ->  

// **** make router and -> replace app by authRouter
// const authRouter = express.Router();


// **** using approuter in index.js
// app.use("/",authRouter);

// -> now index.js is so clean
