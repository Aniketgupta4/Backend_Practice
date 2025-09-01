// at a time 1 file run hogi 
// but i need second.js in first.js -> need module second.js to run first.js -> import kara lo but abhi backend hai toh require karo
// run it by -> node first

//require("./second")  // import like this -> in old time so some issues are their see niche
// -> CJS: common js module

//console.log("first");


// call second.js wala function -> NOT WORKING -> beacuse export ni kare hai -> and as a private aata hai functions so access ni kar shakte hai
// second.js se first.js pe code ata hai private -> koi access ni kar pata hai
// **** IIFI format use -> to run this code jo second se first pe aya hai 
// IIFE ka flow JS code → V8 engine (C++) → Machine Code → Console output exactly waise hi chal raha hai.

// (function (){
//     console.log("second")

//     function sum(a,b){
//         console.log(a+b)
//     }
// })()

// sum(2,3)    
// require("./second") -> if require use karegai toh () function pe code wrap ho jayega -> so function call karna padega ki print ho -> so use IIFI to call fucniton immediately -> print hoga first and second -> but sum(a,b) work ni karega b/c ye ander wale ka code ka part hai
    



// **** second.js pe function call hoga toh chaljeya -> first.js se karegai toh ni hoga run -> IIFI use karne se run hoga by 

// (function (){
//     console.log("second");

//     function sum(a,b){
//         console.log(a+b);
//     }
//     sum(2,3); // ab chal jayega IIfI format pe bhi
// })()

// **** use semicolon otherwise error ayega 
// output is -> first second 5


//----------- conclusion is -> use module.exports (sab sahi se chalega)------------




// Solution ------------------------------------------------

// ***** use module.exports then use -> correct way

// const sum = require("./second")
// console.log("first");
// console.log(sum(2,3))

// ------------------------------------------------



// as a object multiple exports kolo


const {sum,sub} = require("./second")
console.log("first");
console.log(sum(2,3))
console.log(sub(2,3))
