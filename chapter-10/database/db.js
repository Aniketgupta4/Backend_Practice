// database -> image1

 // -> db changes are permanent -> server again start karne per bhi data rahega 
 // -> db ka data store in secondary memory -> and store in organised manner ki update delete kar shake 
 // -> **** by cmd/query we perform operations on millions of data records
 // -> **** but in file system we cant do this ki query likh shake hame manually karna hoga sab -> but db pe lakho record ko easily manage kar shakti hai by perform query




 // dbms kya hai -> 


   ////SERVER////
// user server ko bolega db pe
//  ye store/retrive karna hai
//   dbms karta hai in db
//     |     
//     \/   

////////                    DB TABLE (DB)
//DBMS//       ---->    (physical store system)
////////                  (to store data)
//    |                        (SQL DB) 
//    \/    

// -> application               
// hai dbms ise hm
// query chala
// shakte hai in db
// -> **** dbms structure way pe organise karata hai data in db




// q1 -> why excel sheet is not a db isme bhi structure way pe data store hota hai ? 
// -> excel sheet have a limitation -> ki rows and column minimum hai -> multiple people have access of db so changes ho jayegai bohot bekar for db -> no data filtering is their -> age pe name daldo and all -> so excel is not a db




// => structured and unstructured data
// **** image2 -> cant stored image video in db beacuse image videos are in unstructured data format -> so apan inko query ni chala shakte hai -> aysa kare video ko or kahi upload kar de and sirf link yaha store karde but we cant manage it  
// **** image3 -> img video data process hone mai sec memory se ram pe ata hai and ram pe limit hai ki sec memory se 1gb data ayega suppose from sec storage se ram pe to process -> so bohot sara image hai toh -> bohot time lagega -> and agar db pe video store kare toh size big ho jayega and we cant manage  
// ******** image4 -> so we cant store direct video -> only store link in db -> and video ko file storage pe bhi store kar shkte hai
// **** so db ko easily manage kar shkte hai    
// **** if image video is small so db pe store kardo in binary agar -> img video big hai toh cdn se manga lo and store karo in cloud (sec memory) and or kahi pe and link store kardo in db -> so db heavy na ho and analysis video pe ni kar shakte bs and karna bhi ni hai video img pe query

// ************ img video analysis karne ke liye ml ka use karna hoga and yahi reason hai and apan web dev use karra hai not use ml


// semistructure data -> structure + unstructure 
// -> video ka metadata hota hai na -> data about data -> format ,quality,creation_data and creation_time and all inside metadata
// -> metadata is in structure format -> and store metadata in db -> and we manage metadata in db of video only
// -> and actual data is in unstrucured format




// **** sql db ->

//  -> bank transction ke liye use sql database 
//  -> follows acid properties atomicity,consistency,isolation,durability

//  -> i) atomicity -> 
                        //A//        //B//
//   a se b ko 1000 bhejna hai so -> read the balance of a
//                                -> balanceA - 1000
//                                -> read the balance of b
//                                -> balanceB + 1000
//                        

    // ->  ** according to atomiticity -> puri transaction hogi and agar kuch issue hua so roll back ho jayega -> pehle jaise kardo jo jaisa tha -> so one each treat as individual unit


// -> ii) consistency ->
//
// -> before and after the transcation data consistent rehna chaiye
// -> before transaction             after transaction 
//      5000 , 3000                    4000 , 4000
//
//    total = 8000                       total = 8000
//
//  -> aysa hona chaiye inconsitent ni hona chaiye 
//


// iii) isolation -> a ne b ko paise bheje thik so b read karega and update 5000+2000 = 7000 thik and same d ne 5000 sends to b so total hua 5000+7000 = 12000 -> so dono transction isolate ho 1 transcation dushre pe interfare na kare
//
//  3000                 10000
//  //A// 2000 send     //D// 5000 send
//     
//       \               /
//
//              //B//
//               5000
//     final : 7000 then update to 12000     
//
// -> **** dikkat hoti hai bich mai transaction mix ho jati agar ek sath same time ke kare toh so iske liye bohot sari methods ki isoated rahe transcations 


// iv)  durability -> server pe bomb gir jaye , server crash ho jaye , kuch bhi ho -> per db loss na hai

// ->  **** so data ka replica banate hai and store in multiple geographical locations







// ****** since -> ACID proprties followed by sql -> so bank wagera pe sql use hota hai 



