// 1) Logout -> in auth.js

// way1 -> simply when user req for logout then res pe use ek invalid token bhej do so user new invalid token store kar lega in cookie so logout hogya 

// way2 -> cookie ke ander hi token hota hai na -> so cookie hi remove kardo
// **** issue -> ye hai maine jwt copy karke rakh liya toh -> logout ke baad bhi data mil jayega by jwt token
// -> basically logout se abhi sirf token remove hua hai delete ni hua hai 

// **** solution -> jo bhi token se logout hue hai inki list bana lo as blocked token ki kabhi inse login hue toh reject kardo 
//               -> so in blocked list of jwt token ko kahi store karna hoga in db -> so blocked token ko db pe kab tk rakhna hoga in db ? -> jab tk ka expiry hai us jwt token ka tab tk hi rakho warna delete kardo db se -> so ab yaha db call hoga na yr -> so mai isko db pe na rakh ke in memory ram pe rakh du toh jwt token jyada time ke liye valid ni rehte hai ex for 30 min but isme bhi headcahe hai manage karna itne sare token ko in memory ram pe kisko delete karna hai pura code likhna hoga and all and har ek replica pe bhi wo karna hoga data share koi sa medium chaiye iske liye bhi apan ko logic lagana padega so 



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




