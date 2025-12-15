// -> **** make rateLimiter.js in middleware ->  Today implement basics of rate limiter as middleware
// -> **** basically ratelimiter laga ke apan db call less karray hai -> ki pehle rate limiter laga diye as a middleware agar ok hai then db call hoga otherwise kuch fraud hua toh kuch db call toh kam hogi na agar koi bohot sari req karra hai toh

// 1) -------------------- Rate Limiter ------------------ 

// -> **** RateLimiter ko lagana kyu jaruri hai ?
// -> ex -> insta authneticated user hai and bar bar req mar ra suppose 10000 ek minute pe baar baar -> api kharab karna chah ra hai so rate limiter ka concept aya ki rate limit laga do ki 1 minute mai sirf 20 request hi send kar shakte hai 1 user is type se kuch karo
// koi lakho req marrao in a hour so mai kya 1 lakh baar response karunga kya ----> nahi -> and itni sari req se server hi fail/crash na ho jaye
// **** so apis ko sequre karke rakhna padta hai humko


// 1) way1 -> by token bucket

// image1 -> image2 -> in a bucket kuch tokens hai so agar koi client req kare toh client 1 tocket bucket se token leke ayega in server agar token bucket pe token hai toh
// and token use karne ke baad token ko wapas token bucket pe rakh diya jayega
// -> token bucket pe utne hi token dalo jitne apka server handke kar shakta hai at a time

// -> and agar token bucket khali hai so clinet ki req fulfill ni hogi

// -> **** flaws in this algo -> fail ho jati hai ye -> suppose hacker ne 5 lakh req kisi ne maar di and token 10000 hai so 10000 token ki req chale jayegi -> so koi new user aya toh iska toh review kharab hoga na token hi ni hai so iska req fulfill ni hua na
// -> so not use this token bucket algorithm



// 2) way2 -> fixed window (yaha pe fix time hai 1 hour itna se itna mai hi ek particular amount of req kar shakte hai)

// -> har ek user ka record rakho ki last 1 hour pe kitne req mara hai
// -> image3 -> **** agar set ki hui limit se jyada req marra hai user toh nikal do bahar user ko
// -> so hmko isme users and users ka req ko maintain karna hoga ki kitni req kara 1 hour pe and all
// -> login kiye hue users ka toh sab mil jayega info -> but wo jo sirf aye hai users unka data kaise milega at the end ye main page pe ake api call toh karra hai na
// -> **** so by ip address of user -> hm pata lagayegai ki kis user ne kitne req mari hai 
// -> **** basics ye hai ki -> user and sender ke bich msg by ip travel hota hai -> and ip apan nikal shakte hai easily by (req.ip)  

// -> so apan redis pe ye store karengai thik
// -> user ip as key and number of req as value and total time to leave also store karte hai and ttl ki 1 hours mai sirf 60(example) req hi mar shakta hai -> ip(key) : 1(value)  60 min(ttl)
// -> image4 , image5 -> inme ye dekho ki 1 user req kara hai so apan count inc karengai and jaise 1 user ka wo hua complete ki 1 hours mai 60 req complete and 1 hours ke ander hi or req karray hai 60 se jyada so ab ni karne dega req ko fulfill and jaise 1 hours complete so all info of user deleted from redis and after 1 hour same user ke liye phir se new create hojayega -> ip(user) : countofreq  (ttl)
// -> **** per user req ki limit laga do ki 1 hour mai user sirf itni hi req kar shakta hai and redis se 1 hour sab delete ho jayega and new create hoga in redis jab req ayegi then 1 hours baad phir se again next 1 hours pe utni hi req kar shakta hai 

// -> **** apan kya karte hai ab jaise leetcode pe hota hai -> 1 req ke baad 2nd request 8-10sec baad bhej paye -> 2 req ke bich mai 8-10 sec ka gap and pehle wali toh hai hi ki 1 hour pe sirf req 1 user
// -> image6 , images7 -> if user ne 12:01:04 pe 1 req kari and 12:01:08 pe phir se req kari so mai 12:01:08 isko rejext kar dunga kyuki dono req ke bich ka time 10sec se km hai and agar user ne again req ki 12:01:18 pe toh mai isko fulfill kar dunga kyuki dono ke bich ka gap 10sec hai -> so we have to store this time(last req time) too in db 
//                     -> how to store this time ? -> ip(key):value(countofreq and timeoflastreq) : ttl(in seconds)
//                     -> but ye time mili seconds pe ata hai by Date.now() and meko seconds pe store karana hai so mai Date.now()/1000 karunga so time in seconds pe ayega -> jaise req kara user apan time nikal ke store kara lengai in redis db 

//                  // REDIS DB //
//        key            value               ttl
//         ip     countof-req:timeinsec    1 hour
//    12.1.1.1.0      2:3456787654
//                  (as a string store)
//             str.split(':').map(number) -> [,,]   
//              (so number pe agya in aaray form)




// way3 -> sliding window -> code tough ho jata hai

// **** is type ka kuch hoki user ne 12:59 tk 59 req mari so ab 1:59 tk sirf 1 req mar shake so ye implement ni hota in fixed window -> so sliding window pe aye
// -> slide hote jati hai window -> ex -> 12:00 pe req kare so 1 hour means 1:00 tk hai thik -> but ab ye 12:05 se 1:05 tk ka hogya slide hogyi window isye check karega ab and so on
// -> image8 (last 1 hour pe dekhta hai) -> so isme ab wo wali problem solve hogyi ki -> user ne agar 12:59 tk 59 req mari so ab 1:59 tk sirf 1 req mar shake -> window slide hogi and jab 1:59 se jyada ho jayega tab ab phir se ye 60 req mar shakta hai in next 1 hour 
// -> implement this by redis -> redis se easily ho jayega    


