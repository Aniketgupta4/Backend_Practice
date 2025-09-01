// Node-js -> it is a run time environment -> to create servers
// 
// Browser -> have v8 engine -> so browser understand js -> v8 engine is of google -> v8 engine is witten in c++ and a code that understand tour js code 
// 
//            //////Browser///////
//            //                // 
//            //  //v8//        // 
//            //  //  //        // 
//            //  //////        //
//            //                // 
//            //////////////////// 
// 
// -> js code --> v8 engine --> machine code convert
// 
// how c++ understand js code ? -> (see v8 engine github -> src -> code) ->    
// 
// -> ex : a) str = "123456j[h/,g-fd]sdgb" -> kya ye c++ samjhega -> and write code in c++ ki even odd and char seperate out kare
// 
//         b) if there is a new array = [2,3,4,5,2,8,9,1] -> write code in c++ ki sum the array
// 
//          -> basically string wala array wale code ko ni smajhgea -> wo wala code isko execute ni kara payega obvious si baat hai
//          
//           
//        ------ JS CODE ------
//        
//            -> **** C++ pe code likha hai jo JS code ko samjhega -> machine code pe convert karega
// 
//             JS CODE -->  //V8//  -> MACHINE CODE
//                          //////
// 
//            -> c++ pe code bohot big and complex ho jata hai so -> and js pe easy rehta hai
// 
//  why c++ ? 
// 
//  -> At that time (2008), C++ was the only mature, widely-used, portable systems language that gave both performance (close to C) and abstraction (object-oriented, maintainable code). Other options like Java or Python were too slow, and C was harder to maintain for such a huge project.
//  -> V8 was written in C++ because it was the best balance of speed, portability, and maintainability available then
// 
// 
//  ->  //FRONTEND//    ->     //SERVER//      ->       //MONGODB//
//      ///////////     <-     //////////       <-      ///////////
//                (JS FILE-> DB credentials,business logics)
// 
//       db ko direct expose ni karte -> so frontend db se direct interact ni karta -> b/c fronted ka code inspect karke mil jata hai -> koi bhi data chori ka shakta hai agar fornted db se direct hoga toh -> data leak -> so bich mai server aya as a intermediate
//       business logics server pe hota hai -> sabke different diffenrt imp hota hai -> not share kisi ke sath -> isi liye server pe likhe hote hai business logics
//       ex : business logic -> max 2 lakh bank limit to withdraw -> frontend pe likho gai toh apan change kar shakte hai by inspect -> so fraud occur -> so server pe likho business logics kyuki server ka access sabke pass ni hota hai -> so koi changes ni ar shakta hai 
// 
// 
//  -> server : in c++ , java , python (pehle) -> and js only used in frontend not for backend -> so developers ne aysa kara ki -> js backend pe bhi use ho -> by node js
//
//            //////NODE-JS/////////
//            //                  // 
//            //  //v8// /power/  //    (v8 engine ye sab ni samjhta -> nodejs ke pass extra power hai wo ye sab samjhta hai)
//            //  //  //  /    /  // -> fetch(),dom,global,settimeout,db conncetion,console.log(),etc
//            //  //////  //////  //
//            //                  // 
//            ////////////////////// 
// 
// 
//        v8 engine follow -> ecma script -> and v8 only understand js -> v8 ko ni pta settimeout kaise chalgea -> but v8 global  
// 
// 
//          -> ex:server understand c++ code -> and likh diya aysa c++ code in server ki wo js samjh shake -> existing server jo c++ samjh shakte hai -> wo js bhi samjhegai -> server understand c++ code and mai v8 engine (c++) ka code dedo server ko so js ke code ko samjhna hai -> so backend mai use kar shakta hu -> bs v8 ka code dedo -> jaise c++ ke code ko samjh ra tha waise hi js ko code ko samjhge ga  
//          -> ** any application understand c++ -> iske pass c++ compiler hoga and give v8 engine (c++ code) -> so agar mai application ko v8 wala code dedu so wo samjh jayega code ko -> this is adv
//  
//
//     ==>
//
// V8 Engine (written in C++)
// Parser + Compiler + Optimizer + Garbage Collector (all in C++)
//     ↓ (machine code output)
// Host Application (C++ app / Node.js / Chrome, etc.)
//     ↓
// Underlying OS / Server

// ⚡ Key correction:

// V8 itself is not just C++ code you “give” to server — it’s a runtime engine that compiles JS → machine code.
// You can embed V8 in any C++ application, but the flow is JS → V8 (C++) → Machine code → Application/OS.

//         -> ** v8 can be embeded in any c++ wale application pe
//                 JS code
//                   |
//                   \/       
//     //////C++ code(v8 engine dedo)/////
//                    |
//                    \/                   
//             SERVER(compiler)
// 
//   AND 
// 
//      JS code
//        |
//        v
//     V8 Engine (C++ runtime: parser + compiler + GC)
//        |
//        v
//   Machine Code -> Runs inside C++ Application / Server
//
//
// -> ******(No CONVERTION) js code not convert into c++ code -> js input -> v8 samjhega -> machine code 
//
// ---------------------- BASCIALLY SPECAIAL ALREADY JAISE C++ CODE SAMJHTA HAI WAISE HI JS BHI SMAJHTA HAI ---------------------- 