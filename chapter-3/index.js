// 2) file use kaise kare -> data.json


// ** insabko libuv handle karega -> b/c data read karne mai time lagega -> so ye async task hai -> so isko libuv handle karega b/c at the last os read karega and libuv ko dega -> place it in queue -> and event loop check karega ki call stack empty hai ki ni -> agar empty hai toh callback queue se uthake call stack mai chala jayega

const fs = require('fs')  // inbuilt module in node.js -> existing

fs.readFile("./data.json","utf-8",(err,res)=>{
     console.log(res) // if use "utf-8" then no need to use toString()
    // or
    //console.log(res.toString());
}) // callback deray hai apan -> b/c libuv bhi callback pe wo karta hai and return karega in callback fun -> then we execute it







// 1

const a = 10;
const b = "hello";

console.log(b)

function add(x, y) {
    return x + y;
}

setTimeout(() => {
    console.log("timer done")
}, 2000);  // ** ye 2 sec baad chalega -> ye js ni samjhega -> so isko implement karega livuv in c -> and ye v8 ko dega and wo print kara dega o/p


console.log(a)
console.log(add(10, 20));


// -> output:
// hello
// 10
// 30
// timer done


//  -> working : js chalega -> call stack mai jayega -> line by line execute karega -> jab settimeout aayega toh wo call stack se nikal jayega and web api mai chala jayega -> and 2 sec baad timer khatam hoga -> and callback queue mai chala jayega -> and event loop check karega ki call stack empty hai -> so callback queue se uthake call stack mai chala jayega -> and print kara dega o/p
// 
//                |      |    //////LIBUV///////
//                |      |    // | queue    | //
//                |      |  ->//      |       //       -> pehle b print karaya then -> sum function -> then libuv async task settimemout handle karega -> libuv mai call back queue hongi and event loop jo isko handle karegi 
//                |      |  <-//  event loop  //
//                |      |    //////////////////
//                |      |
//                |_GEC__|   -> global execution context -> line by line 1 1 karke execute karega
//                call stack
// 
// 
//                -> event loop -> check karta rahega ki call stack empty hai ki ni -> agar empty hai toh callback queue se uthake call stack mai chala jayega
// 
//           -> callback function execute 2 second baad hoga -> so ye async task hai -> so isko libuv handle karega -> place it in queue -> and event loop check karega ki call stack empty hai ki ni -> agar empty hai toh callback queue se uthake call stack mai chala jayega
//           -> **** jab sab task complaete so GEC pop ho jayega -> and call stack empty ho jayega -> and event loop check karega ki call stack empty hai ki ni -> agar empty hai toh callback queue se uthake call stack mai chala jayega -> and print kara dega o/p -> and libuv pe async task settimeout hoga wait in queue for 3 second ke time interval tha but libuv os se timer lega then after 3sec isko stack pe dega -> and atlast callback function settimeout ko stack pe dal dega and wo execute hoyega
//           -> **** callstack pe sab hota hai -> and 1 by 1 js code execute karta hai