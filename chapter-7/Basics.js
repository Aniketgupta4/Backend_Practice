// postman


// json(js object notation) and js object -> both are different

// 
//    json                        js object
//
// -> string format /            -> object
//    text based format          -> object ke ander sab hota hai -> nul undefined array fun etc
// -> {"name":"aniket"}        
// -> send [array to] 
// -> string , null , object
//    ko dal shakte hai in json
//    ke ander
//  -> but not send fun and 
//   undefined 
//  -> 2 valid format
//   array and {}
// 
// 
//    
// 
//   ex: ** string ko har language samjhti hai
//      {name:"aniket",age:30} -----------> so convert it into string format(json) -> '{"name":"aniket","age":"30"}'
//                               (parser)                                   
// 
//   -> **** and ab ye json converted -> application layer pe travel kar shakta hai easily -> b/c string convert easily into 0/1 (binary) -> and data travel easily -> and json ko finally js object pe convert karna padega ki backend koi si bhi languagae pe ho wo samjh jayega -> so yaha ata hai parser****(json -> js object convert karta hai)
//   -> so yaha parser ka kaam -> express.json() -> karega -> and ye as a string**** hi dikhata hai in js object in key value pair ex: {name:"aniket",age:"30"}
//   -> **** sabko string rakhta hai b/c isko pata ni hai ki konse format pe aya hai num and all -> for safety string pe sabko lata hai
//    
// 
//    -> ********     {name:"aniket",age:30} -----------> so convert it into string format(json) -> '{"name":"aniket","age":"30"}'  ----------------> {name:"aniket",age:'30'}
//                 jo bhi data aara hai                                                                                                 (parser)           js object form             
// 
//     -> **** sabke liye json hote hongai alag alag
// 
//
//      -> **** post mai bohot data hota hai -> so header pe hota content-type -> isme hota hai json data hai ya xml data and all -> so inko pata chal jata hai kon se format pe data aara hai
//
// question -> instagram hai thik and browser understand html css js -> and insta ka backend kispe bana hai in any language -> so some info js object ke form mai send kare to insta so jis langauage pe insta hoga samjh payega wo -> ni samjh payegi -> so json kuch or mai -> so aysa kuch create karo ki wo sab jaye java python etc(any backend)
// 
// 
// 
//   -> **** postman mai sab inbuilt hai -> but hmko sab likhna hoga in frontend we self design it
//