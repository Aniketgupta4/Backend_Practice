// 2) ***************** introduce new db ----> Redis (too much fast -> in microsecond work karte hai whereas mongo do in miliseconds)

// -> mongodb stores data in secondary memory -> so query karne ke liye pehle isko primary pe laao then query perform hogi
// -> where redish stores data in ram (primary memory) so ye faster hai bohot -> **** so redis is in memory db 
// -> **** so redis work faster -> but as data store in ram and ram is volatile so redis pe aysa data store ni kare jikso permanent store karna hai -> use redis for ****temporary data -> so token ke liye use kar shake hai isko 2 4 din ke liye hi token rahega na so use redis and isko expire karne ke baad toh delete kardo no issue 
// -> **** redis ka ye hai ki -> 3 din tk token valid hai -> so iske baad token delete kar dena khud hi
// ----> **** pura data of redis store in primary memory for faster work -> per as a backup redis store data in secondary memory too

// **** -> redis alag se hi hai bhai -> khud hi scale hota hai (hori & vert) -> and redis hamesha alag server pe hi rakhte hai -> kyuki kisi ke sath hai toh issue hota hai ram share ka because redis in memory db
// **** -> redis is coster then mongo and all
// **** -> jaha jaha bar bar call hota hai so waha -> redis use karo ek baar data fetch karke redis pe rakh do and call aye data dete jao redis se-> actual data is in mongo but as a cache use kar shakte hai redis ko -> ki mongo de datat redis pe dale and bar bar req aari hai so redis de data dete jaray hai
// **** -> apan manage kar shakte hai ki redis teko ye data itne din ke kiye save karna hai and all
// **** -> jaise mongodb sharding replica maintain karta hai na -> waise redis bhi sharding + replicas maintain karta hai self 
// **** -> redis ko less use karte hai kyuki costly hai -> as compare to mongodb because mongodb is not costly




// ------------------------------------ class-23 (Redis indepth) ----------------------------------

// -> using logout feature by redis
// -> ki jaise logout kare toh ek new token aya and purane token ko hata ke redis pe store kara do and when user aya so check karo ki token redis pe hai toh ni delete agar ni hai so access de denagi warna match ho gya mtlab koi purana invalid token use karra hai so isko ni do access   
// -> **** redis ko batana padta hai ki is token ko itne time baad delete karna hai toh khud redis hata deta hai after that time

// -> ******** windows wale redis ko install direct ni kar shakte -> yaha waha se install karna padta hai -> so online mongo atlas jaise hi redis ko online use karengai
// -> (use redis server online) -> login in redis -> createdb -> free ko choose karo -> aws -> mumbai -> 30mb free milta hai and 1 db only
// -> connect to redis db by click connect in redis db -> and copy paste nodejs code form redis 
// -> so sabse pehle redis laao in system -> npm i redis
// -> make folder config -> redis.js 


// **** image1 -> redis is key value pair based db -> because of ****faster to find data in redis db beacuse data of redis is stored in ram
// **** Good developer do -> key must be unique and ****key ko hamesha kuch meaning full name dena 
// ex: key:token:rgwbvbvwvbwbwb 
//     value:"blocked" 


// -> or baki toh normal bhi store kar dete hai -> key : "dwenrfbggg" value: "blocked" -> ayse bekar hai yr ayse in future dekhe db toh samajh hi ni ayega ki ye token hai ki kya hai  

// -> **** iat -> creation time of token is imp 





// 3) -------------------- Rate Limiter ------------------ 

// -> **** RateLimiter ko lagana kyu jaruri hai ?
// -> ex -> insta user and bar bar req mar ra suppose 10000 ek minute pe baar baar -> api kharab karna chah ra hai so rate limiter ka concept aya ki rate limit laga do ki 1 minute mai sirf 20 request hi send kar shakte hai 1 user is type se kuch karo


