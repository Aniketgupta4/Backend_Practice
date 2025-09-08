// create server



// 1) data req karega is client and jo response dega is server

//          client                server
//        request  ------------->   response


// server hardware or software hota hai jo request ko process karta hai aur response bhejta hai
// client wo hota hai jo request bhejta hai aur response leta hai

// if data hai in ram and pc off data lost -> so data store in secondary memeory -> hard disk, ssd, usb 
// server ko bhi data store karna padta hai -> database


                                // services                         client
                       //         1000 images                   <-   request
                       //         1000 images                   ->   response

//                              SYSTEM/computer
// 
//               -> if bohot sare users agaye toh bar bar req ayegi toh system thoda na handle karega -> automation kar diye in system ki req ayegi toh system khud hi handle karega
// 
// 
//                               // services                         client
                       //         1000 images                   <-   request
                       //         1000 images                   ->   response
                         //   code for automation
//                             
//                               SYSTEM/computer
// 
// 
//            -> ** so basically server is a computer jisme data store hota hai (html,css,js,db,backend) and wo data client ko provide karta hai jab wo request karta hai
// 
//            -> server ko hum apne computer pe bhi bana sakte hai and uske liye hume backend language use karni padti hai like nodejs, python, php, java etc
// 
//            -> backend language se hum server bana sakte hai and usme data store kar sakte hai and client ko provide kar sakte hai

//            -> computer bhi server ban shakta hai but hm system ko server ni bana shakte hai because system me data store ni hota hai -> so issues ki 24 hrs system on hona chaiye internet hona chiye 24 hrs -> so isliye hum apne computer ko server ni banate hai but hum apne computer pe server bana ke dekh sakte hai ki server kaise kaam karta hai
//            -> and system specifiaction bhi high honi chaiye -> so isliye hum apne computer ko server ni banate hai but hum apne computer pe server bana ke dekh sakte hai ki server kaise kaam karta hai
//            -> ** so we cant handle system as server but we can create server on our system to understand how server works -> ex aws // azure // gcp -> these are cloud service providers -> they provide server on rent basis -> we can use their server to host our website or application
// 
//            -> ** so hame hardware ki jarurat padti hai server banane ke liye -> so we can use cloud service providers to host our server -> and software ki jarurat padti hai server banane ke liye -> so we can use backend language to create server -> like nodejs, python, php, java etc
//            -> ** so server banane ke liye hame hardware and software dono ki jarurat padti hai -> hardware ke liye hum cloud service providers ka use kar sakte hai and software ke liye hum backend language ka use kar sakte hai
//            -> so sab log server se req karte hai and server unhe response deta hai -> so server ko handle karne ke liye hame backend language ka use karna padta hai -> so backend language se hum server bana sakte hai and usme data store kar sakte hai and client ko provide kar sakte hai
//            
// 
//
//
// 
//
// 
//       2) client server
// 
//                                                            http(80)/https(443)
//              //////client////////                           //////////server/////////
//                  request  --------------------------------------> response
//                  123.11.22.33                                     123.55.33.11
//                       tcp connection established or socket created(port_number-> 80, 443, 3000, 5000 -> port baat karne ke liye jaruri hai)
//
//
//                         ex: http://op.com -> so first yeh ip address me convert hoga -> ip ka converion dns kar dega -> 
//                         -> ** client toh port dega apna but server ko port number pata ni hoga -> so server ka port number 80 hoga by default -> so client apna port number dega and server ka port number 80 hoga
// 
//                -> ** so basically client and server ke beech me data exchange hota hai -> jisme client request bhejta hai and server response deta hai
//                -> ** and jaise hi req fulfill ho jayegi waise hi connection (socket) close ho jayega
//                -> ** if agar new msg bhejna hai so again se connection (socket) create hoga and data exchange hoga
// 
//
//
// 
//          -> socket (ip+port) -> ek aisa endpoint hota hai jisme data send and receive hota hai -> jisme data send and receive hota hai usse socket kehte hai
//          -> tcp connection -> ek aisa connection hota hai jisme data reliable way me send and receive hota hai -> jisme data reliable way me send and receive hota hai usse tcp connection kehte hai -> tcp connection me data loss ni hota hai -> so tcp connection me data reliable way me send and receive hota hai
//          -> port number -> ek aisa number hota hai jisse hum identify karte hai ki kaunse application se data send and receive ho raha hai -> jisse hum identify karte hai ki kaunse application se data send and receive ho raha hai usse port number kehte hai -> common port number 80, 443, 3000, 5000 etc hote hai
//                                   
//                      /////////////////////////////////////////               //////////////////////////////////////
//                        //insta//   //whatsapp//   //fb//            <-        //sender ip // msg // receiver ip//
//                            ip:123.11.56.19                                        ip:123.11.11.11
//                  
//                   -> ** issue ye hai kiko bheje msg so kisko bheje msg -> so iske liye hame ip address ki jarurat padti hai -> but sabka ek port unique hota hai -> so isko hame bhejna hai msg ip+port number wale ko
//                   -> ip address -> ek aisa address hota hai jisse hum identify karte hai ki kaunse device se data send and receive ho raha hai -> jisse hum identify karte hai ki kaunse device se data send and receive ho raha hai usse ip address kehte hai -> ip address do type ke hote hai -> ipv4 and ipv6
// 
// 
//                     /////////////////////////////////////////               //////////////////////////////////////
//                        //insta//   //whatsapp//   //fb//            <-        //sender ip // msg // receiver ip//
//        port ->           2345         3456         6543
//                            ip:123.11.56.19:port                                        ip:123.11.11.11:port
// 
//                     
//    
//
// 
//
//          3) listening on port
// 
//              //////client////////                           //////////server/////////(listen karra hoga in port 80 by default)
//                  request  <--------------------------------------> response
//                  123.11.22.33:6000                              123.55.33.11:80
//                       tcp connection established or socket created(port_number-> 80, 443, 3000, 5000 -> port baat karne ke liye jaruri hai)
//
//
//                         
//
//                => server is port pe listen karra hai -> 80, 443, 3000, 5000
//                => client apne port pe req bhejta hai -> 2345, 3456, 6543
//                => server apne port pe response bhejta hai -> 80, 443, 3000, 5000
//                => ** listening ka matlab hai ki server apne port pe req ka wait karra hai -> jab bhi req aayegi toh server usse process karega and response bhejega -> beauce sever ke pass bohot sare clients se req aati hai -> so server apne port pe req ka wait karra hai
//                => ** suppose ke 10 log so sabko waiting queue me rakh lega server and ek ek karke req ko process karega and response bhejega               
//  
//                => ** bar bar new connection establish ni hoga thik ab new verion of http
// 
// 
// 
// 
// 
// 
// 
//         4) 80 port number pe sunra hai -> connection terminate ni hoga thik ab -> so bohot sari req hai so kisko res karega ye
//                                      //server
//                                     |  |  |  |
//                           client1 client2 client3 client4
//              -> **** so ip + port ko dekhega and uniquely identiy karega and uske hisab se response dega
// 
//           -> socket -> ip + port -> isme ek ek karke req aayegi and server usse process karega and response dega -> problem in real time chat application -> so web socket ka use karte hai
//                                  -> in client server me data exchange hota hai -> jisme client request bhejta hai and server response deta hai -> so time waste hota hai -> so real time me data exchange ni hota hai -> bar bar puchega msg aya ki ni            
//
//          -> ** web socket(2 way communication) -> ek aisa protocol hai jisme data real time me send and receive hota hai -> jisme data real time me send and receive hota hai usse web socket kehte hai -> web socket me data real time me send and receive hota hai -> so web socket me data real time me send and receive hota hai
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
