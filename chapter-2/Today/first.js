// from multiples modules ye (sum,sub,mul) sab karega and console.log karega hello

// const mul = require("./current/mul.js")
// const sub = require("./current/sub.js")
// const sum = require("./current/sum.js")




// **** not a good habit ki sabko 1 1 karke import karao and all ye current folder pe hai
// **** so make new file index.js and import all -> and module.exports = {sum,mul,sub} ek sath -> good habit
// **** file name must be index.js jisme sab import kare hai

// import direct all -> 3 bar require karni ki jarurat ni ab -> optimise kar diye

//const {sum,sub,mul} = require("./current/index.js")
// or
const {sum,sub,mul} = require("./calculator")
// **** current folder se export hua hai index.js se and apan import kara ray hai sirf folder name se bhi chal jayega -> b/c node folder ke ander index.js file ko khud se dhud leta hai and export karayega -> agar index.js ni hai so error ayega

sum(2,3)
sub(2,3)
mul(2,3)

console.log("hello")


// output 

// PS E:\WEBDEV\BACKEND ROHIT\chapter-2\Today> node first.js
// 5
// -1
// 6
// hello