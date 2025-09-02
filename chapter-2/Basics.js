//   =>  1)   CJS               ES MODULE(MJS)
// 
// -> older way but still     -> newer way
//   use in industry     
// -> requires and            -> import , export
//   module.exports
// -> it is syncronous         -> asyncrounos way
//  (bohot sare require          (bohot sare import hai
//   likhe hai then 1 by 1        so in any order and sath 
//   module load hoga ->          mai load ho jate hai)
//   when 1 module full load
//  then 2nd load then 3rd ..)
// -> non - strict mode          -> strict mode
// 
// 
//     => 2)
//
//     **** not a good habit ki sabko 1 1 karke import karao and all ye current folder pe hai
//     **** so make new file index.js and import all -> and module.exports = {sum,mul,sub} ek sath -> good habit
//     **** file name must be index.js jisme sab import kare hai
//
//      Best way : ayse karo 1 file banake sabke import karo then export karo and use karo 
//      **** file name must be index.js jisme sab import kare hai
//
//      conclusion ->       calculation
//                               | -
//                               | -
//                               | -         ->     import in a single file
//                               | -                    (index.js)*<- fix file name
//                               | -                     |
//                                                       \/
//                                         
//                                                    JS FILE (first.js)
// 
//        
// 
//      => 3) 
// 
//         JS -> Js is a single threaded syncronous language
//         Node -> handle asyncrounus i/o also
// 
//
//
//      => 4)  OPERATING SYSTEM CONCEPTS :
// 
//           =>  a) single core processor : at a time 1 process handle  ex: only yt chala shakte ho ya game hi khel shakta hai only 1 task do aysa ni hai
//                     
//                 -> ** context switching : hoti hai bohot sari process hai context switah hote rahe ga thoda thoda har ek task chalgea and lagega sab ache se chalra hai-> all task work concurrently* nor parally          
//                 -> ** but bohot sare task de diye so context switching mai time lagega so > hang karega -> ui exprecice bekar -> context switching work for few process            
//
//              b) dual core -> 2 processor simultanoeusly works -> ex: 2 processor 1 processor handle yt and 1 proceesor handle game so it work parallely** -> and if bohot sari process agyi so context switching hogi
//                           -> parallelism is their and context switching is also there
// 
//
//
//       conclusion:
//           Single-core → 1 core → handles 1 task at a time.
//           Dual-core → 2 cores → can handle 2 tasks simultaneously.
//           Quad-core → 4 cores → can handle 4 tasks simultaneously
//           Octa-core → 8 cores → can handle 8 tasks at the same time
// 
// 
// 
//            => virtual memory :
// 
//                   ex: pubg is of 20 gb and ram is of 8 gb -> so it load in ram -> virtual memory ****
// 
//                  -> code are witten in chunks (pubg and all)  ->       ////PUBG/////
//                                                                        ///////////// chunk1
//                                                                        ///////////// chnuk2
//                                                                        ///////////// chunk3 ....
//                  -> ** ram mai utna hi code load karte hai jitne chunk of code ki jarurat hai sab ko leke ni aaoge in ram i.e. virtual memory concept
// 
// 
//              
// 
//              => **** process -> execute karne ke liye -> memory , cpu chaiye -> and process ke ander threads hoti hai -> whereas thread is a smallest unit of process i.e. light weight and execute a single unit of task -> and 1 thread 1 hi single unit of process ko execute karti hai
//                          
//                            -> **** multiple thread chaiye when -> a process hai when multiple work karrya hai -> 1 process ke ander -> ex: downlaod a file and print a photo and edit a photo -> 1 process mai bohot sare task karray hai -> single process do multiple tasks karana hai -> ** 1 task 1 thread ko de dega karne ko  
//                            -> (if our processor is single thread processer wala -> then context switching hogi -> and if octacore processor is there -> so ye easily work kar dega by -> 1 processor do 1 task and paralley work hoga ) 
//
//    ------------------------- All this thing system ke haath pe hai ------------------------------ 
//                             
//   
// 
// 
//         5) ex: A)
// 
//                  //////////pizza-hut//////////   
//                 //                          //
//                 // pizza      coke   burger //      
//                 // 10 min    2 min    5 min //
//                 //////////////////////////////
//                    *syncronous way handling
//
//               -> orders
//                1) pizza  10 min lagega 
//                2) coke   10+2 = 12 min lagega 
//                3) burger 10+2+5 = 17 min lagega 
//                4) coke   10+2+5+2 = 19 min lagega
//                5) coke   10+2+5+2+2 = 21 min lagega
// 
//                -> synchrouns way pe hogi so koi website use karna pasand ni karega 
//                -> server js pe hai -> and js* is *syncronuos but we perform async operations 
//                -> **** backend pe node.js hai -> and power deta hai ye ki we perform asyncnorously
// 
// 
// 
//          ex: B) ****
// 
//                  //////////pizza-hut//////////   
//                 //                          //
//                 // pizza      coke   burger //      
//                 // 10 min    2 min    5 min //
//                 //////////////////////////////
//                    *Asyncronous way handling
//
//                -> orders (parallely work hoga)
//                1) pizza 
//                2) coke   
//                3) burger 
//                4) coke  
//                5) coke   
// 
//                    
//                -> **** basically sabki request le lega -> and jab order ayega bata dega -> sab parallel work hora hai -> and piche ke log ko ane do request likhte jao -> means req likho 2min baad coke dedo jiski thi then 5 min baad burger dedo and 10 min baad pizza dedo -> so total 10 min mai sab ready and deliver -> ho shakta hai multithreading chal ri ho ander jaldi jaldi order ban ja ray hai -> butander singe core hai toh so 1 task at a time problem   
// 
//  ------------------------------------------------------------------------------------------------
// 
//        => ******** node.js is single threaded but kahi se multithreaded power lata hai -> where v8 is also signgle threaded but browser v8 ko multi threaded nature deta hai by settimeout and all -> waise hi node.js ko multithreaded provide karta hai child_process aur cluster modules    
// 
//             child_process → ek Node.js process ke andar se naye process spawn (banane) ke liye.

//             cluster → ek hi server ke multiple copies (workers) banane ke liye, jo multi-core CPUs ka use karke load distribute karte hain.
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
// 
// 
// 
//
//
//