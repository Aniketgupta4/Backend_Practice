// cookies and jwt tokens -> ye sab chize login ke time pe karte hai 

// -> cookies ke ander hi tokens hote hai
// **** -> cookies ki help se subscription bypass kar shakte hai -> install cookie deditor extension -> then login karo in any website then go to extension export the cookies and import all those cookies in another broswser so without id password login ho jayega -> bypass kar diye

// **** image1 -> jwt token is stateless db mai and all save karne ke jarurat ni hai
// user ek baar login kara id pass se then server isko jwt token de dega then next time se user ko kuch bhi karna hoga so wo jw token leke ayega and work hoga

// jwt token have 3 fields -> header + payload + digital signature
// **** jwt ke ander username hota hai and sensitive info kabhi jwt pe ni dalna kabhi                                       
// header -> header mai simply {"alg":"hs256","typ":"jwt"} -> sirf algo and type store hota hai bs in header 
// payload -> bar bar user req kare ye ni chahte (id , pass -> again and again) -> and 1 baar login karne ke baad user kuch work karega ex -> search_id , watch_reel so new new route pe click karega so bar bar login ke liye id pass toh send ni karega -> so jwt token assign hoga to user and jwt token mai userid,email and all (but not sensitive info store karo in payload) store kardenagi in payload beacuse -> when user again req to new route jwt pass hoga user req ke sath to server so again and again apan ko id pass send na karna pade by jwt ke form mai info send ho jayegi self and server verify karega ki wahi user hai  
// **** digital signature -> header + payload ka hashcode nikalega and encrypt the hashcode with key and generate 2nd hashcode and hmko digital signature milega and isko decrypt karne ke liye server key chaiye wo server ke pass hogi so server decrypt it -> and apan isko incrypt and decrypt isliye karray hai kyuki ye pata chale ki bich mai info(header+payload) mai cherkhani toh ni hui hai na
//                   -> digital signature in must kyuki koi bhi hacker bich mai cherkhani kara toh digital signature se pata chal jayega ki kisi ne cherkhani kari hai -> baki sab ko change kar dega per digital signature mai farzi pana ni kar shakta kyuki isko decrypt karne ki key sirf server ke pass hoti hai 
//                   -> and jab server pe jwt hai uska signature and jo hmne bheja ha uska signature match kara toh sahi hai warna kisi ne cher khani kari hai
// **** stateless -> hai isi liye kahi bhi store ni karna pada jwt token ko
// **** statefull -> inko manage karna hoga kahi store karna hoga in server or db ex -> session id

// -> ******** digital signatue ko encrypted hai -> but header and payload -> encrypted + hashed kuch bhi ni**** hai normal rehta hai -> in base62 form dono hote hai

 
// image2 ->
// -> hashcode is 1 way (maintain intregity -> ki cherkhani hui ki ni) -> wapas pehle jaise ni ho shakte
// -> encryption is 2 way -> but encrypt decrypt ke liye keys chaiye -> 2 way incrypt and decrypt done by keys

// -> **** imp document ka hash nikal lo then kisi ko diye then last mai again check hashcode pata chal jayega ki cher khani hui hai ki ni 
// -> image3 -> big se big document upload in sha256 and kisi or mai -> get 256 bit hash 


// **** jwt token(access token) hai iski koi expire data bhi honi chaiye na ?
// -> yes -> ex -> kuch din baad logout ho jata hai in github 15 din baad may be
// -> if expire toen so wapas login karengai so new access token milega -> depend on developer expiry set karna hai ki ni

// -> **** 2 tokens are there -> access token and refresh token
// -> refresh token -> Used only to generate a new access token when it expires
//                  -> If stolen → more dangerous (so must be stored safely)
// -> access token -> Used only to generate a new access token when it expires
//                 -> If stolen → more dangerous (so must be stored safely)

