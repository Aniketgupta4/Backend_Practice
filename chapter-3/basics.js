//     
//   1) ( NO INTERACTION WITH OS DIRECT)         (OS handel these things)-> differnt os mac windows linux -> differnt way to do these work
//       ///////NODEJS///////                     /////OS/////
//       //                //                     // TIMER  //
//       //  //V8//        //                     // N/W CALL//
//       //  //////        //                     // FILE    //
//       //                //                     /////////////     
//       ////////////////////
//   
//        
//        -> ** js ko ni pta how to implement -> settimeout , setinterval , fetch -> so we don't have Timer access(settimeout setinterval nikalte hai) , file access ni kar shakte by js , network access ni kar shakte by js can't fetch data , db se connection ni bana shakte -> manage by os
//        -> **** node ke pass v8 bs hai os access ka tarika ni hai ->  
//        -> **** node ko kisi os pe chala shakte hai -> b/c node have global object so wo kuch bhi kar shakta hai -> operations (settimeout,setinterval and all) -> and ex: settimeout(callback,timer){} so isme bhi access leni padegi callback and timer ki ye Operting system manage karta hai -> so iska access kaise le os se 
//        -> ****** Libuv aya : so system ke interact karna ke liye ek aysi language chiye jo direct system se baat kar shake i.e. c,c++ -> so introduce libuv -> libuv is a c library -> jo node ke sath aata hai -> so node os se interact karne ke liye libuv ka use karta hai 
// 
// 
//     2) LIBUV :  so introduce libuv -> libuv is a c library -> jo node ke sath aata hai -> so node os se interact karne ke liye libuv ka use karta hai 
//            -> libuv ek C library hai jo mainly asynchronous I/O operations (non-blocking I/O) handle karne ke liye banayi gayi hai. Ye hi Node.js ke andar "event loop" ko chalati hai.
//            -> Jab tum Node.js code likhte ho jaise fs.readFile, setTimeout, http request, etc., wo directly JavaScript se nahi chalta.
//               Ye sare asynchronous kaam (file read/write, network operations, timers) ko libuv manage karta hai.
//               Node.js ke event loop ka engine libuv hi hai
//
//
//
//                //////////NODEJS////////// 
//                //                       //                 /////OS/////
//                //  //V8// -> //LIBUV//  //     ---->       // TIMER  //  
//                //  ////// <- /////////  //     <----       // N/W CALL//
//                //   c++        c        //                 // FILE    //
//                //                       //                 /////////////
//                //                       //
//                ///////////////////////////
// 
//                   -> ********* v8 interact with libuv interact karega direct os se and vice-versa
//                   -> **** libuv any os se interact kar shakta hai so node bhi kisi bhi os pe chala shakta hai
//                   -> basically os har data layega with the help of libuv and libuv v8 ko dega and vice-versa
// 
//                  -> **** ex: settimeout(){} -> ye js ni samjhega -> so isko implement karega livuv in c -> and ye v8 ko dega and wo print kara dega o/p
// 
//
//
//      3) In webbrowser -> **** not use libuv here
// 
//     => **** kya broswer mai bhi ayse hi work hota hoga ?
//             -> download google chrome -> ask syatem widnow mac -> then it give v8 and (code likh dega in c or c++ -> kaise system hardware access karega -> a/c to system(os) ** )
//             -> libuv ko pta hai kaise os se baat karna hai -> os apan ko access lage dega resource ka 
//             -> ** system ka access os ke pass hi hona chaiye -> apne pass hoga toh fas jayegai apan manage ni kar payegai
//             -> ** kuch bhi karna hai os karega -> os manage easily  
// 
// 
//     => **** settimeout(){} -> ki implementation hogi (code hoga) -> in libuv -> we only use fucntion -> syntax se bs 
//          
//             ex:   settimeout(){}          detailed code(actual)             os(system) diffenrent diffent os so alag alag type se access karega
//                        |             ->         |                 ->              |
//                    v8 engine         <-        libuv             <-       resource provide karega -> ki 2 sec baad chalna hai n/w access etc 
//                                             (powerfull)
// 
//         
// 
//         4) ***** global objects(window, fetch,settimeout and all) -> are fucntions -> unki actual implementation hongi na -> jise wo visible hai    
//      
//           -> **** jo bhi global object mai function likhe gaye hai -> uska implementaion libuv mai hoga -> and wo v8 ke through call hoga -> and v8 libuv ko call karega -> and libuv os se baat karega -> and os resource dega -> and libuv v8 ko dega -> and v8 humko dega
//
//            ex: settimeout(){} -> iska implementation libuv mai hoga -> and v8 ke through call hoga -> and v8 libuv ko call karega -> and libuv os se baat karega -> and os resource dega -> and libuv v8 ko dega -> and v8 humko dega
//                (global object)
//
//
//
//
//         5) *************** in backend -> without libuv ke -> no n/w call , no file access , no timer access -> so node mai libuv is must
// 
//             ex: square(4) -> answer thoda na dedega ayse hi -> only a fucntion
// 
//                    // implemnt toh karo pehle -> then answer dega
//                   
//                    -> function square(n){return n*n }
// 
//      
// 
//          6) ex: 
//             
//               const a = 10;
//               const b = "hello";
//            
//                console.log(b)
//             
//                function add(x, y) {
//                return x + y;
//                }
//              
//                setTimeout(() => {
//                 console.log("timer done")
//                }, 2000);  // ** ye 2 sec baad chalega -> ye js ni samjhega -> so isko implement karega livuv in c -> and ye v8 ko dega and wo print kara dega o/p
//              
//               console.log(a)
//               console.log(add(10, 20));
// 
// 
//            -> working : js chalega -> call stack mai jayega -> line by line execute karega -> jab settimeout aayega toh wo call stack se nikal jayega and web api mai chala jayega -> and 2 sec baad timer khatam hoga -> and callback queue mai chala jayega -> and event loop check karega ki call stack empty hai -> so callback queue se uthake call stack mai chala jayega -> and print kara dega o/p
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
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//