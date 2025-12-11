// jwt and (hld ka part hai)Refresh token

// jwt = access token -> for short time if expiry set kare hotoh
// ex -> linkedin , insta , facebook -> use jwt -> ki apne se expire ni hota hai jb user karega tab hoga 
// per set hai ki expire hoga in sometime -> use by gfg , leetcode -> so refresh token lagega to generate jwt again

// hld part -> refresh token -> jwt token expiry hogya so refresh se jwt phir renew hota hai
         

// if jwt pe expiry set ni hai so issue hota hai -> so expiry set karo bhale 1 month ka kardo but karo ?
// -> suppose jwt chori hogya thik -> so hacker toh use kar lega token se -> even apan password bhi change kar liye but **** jwt token valid hai so use kar shakta hai hacker -> token never invalidate and apan ni kar shakte invalidate
// **** -> expiry set hai toh jab jwt expire so hacker se haat gya ab access kyuki ni token generate hogya after 1 month by refresh token so user ko phir se login na karna pade apne se refresh token se hi ho jaye


// **** refresh token pe info hoti hai ki jwt 30 din tk valid rahega and refresh token 6 month ke liye valid rahega
// so jaise 1 month baad token expire hua so ab refresh token pass hoga ab so server samjh jayegaki new jwt generate karna hai so ab server new jwt(access token) generate karega and send karega 
// **** and when refresh token expire hone wala hoga then -> wo new refresh token generate kara lega i.e. valid upto 6 months again

// **** refresh token chori hogya toh ?
// -> so hacker again access so agar hm password change kare so ********refresh token invalid ho jayega ****** problem solve hai 


// ----------------------------------------------
// **** conslusion -> access token password change pe valid rehta hai and refresh token password change karne pe invalid ho jata hai
// ----------------------------------------------

// **** refresh token ka implementation -> jwt jaise ni hai
// jwt is stateless hai -> not need to show jwt into db 

// ****** refresh token is just like session -> generate random string and store in db -> so validate and invalidate kar paye -> and isme sab info rakhna padega ki 6 month ke liye valid hai and username ye hai and all
// refresh token pe info store hai and jab again ye generate karata hai jwt ko toh db se detail fetch hoke server pe match hota hai ki wahi hai ki ni then generate this jwt token and sometime refresh token

// agar user ne logout kara so refresh token expire means db se refresh token ko delete kar dunga and ise related sari info ko 
// and generate new access token for new login and again save info in db ki 6 month ke liye valid hai username ye hai and all info store in db

// **** refresh token ka structure -> jwt jaisa ni hai header.payload.digitalsignature aysa ni hai -> ek random string generate karta hai refresh token -> and store in db iski help se validate invalidate karta hai ye jwt token and refresh token ko

// refresh token ko simple store karna chiye in db ki ni ? 
// -> **** hash karke store karna chaiye ki agar db leak hua toh hashed form ka kya karega hacker refresh token ka 
// -> **** jaise hacker hash leke aya in server so it fetch detail from db hash mila refreh ka so hacker wale hash ko check karne ke liye server usko normal samjh ke again hash karega so kuch or hi generate hoga not match with db wale hash se so pata laggay na fraud hai invalid hai ye


// **** in banks -> access token ka access only for 10 to 15 min because kabhi kabhi use karte hai and bohot sensitive hai ye isi liye

// **** hacker access token ka access leke pasword change kar shakta hai kya ?
// -> ni kyuki password change karne pe time pe old password bhi mangta hai so apan safe hai yaha pe -> isi liye apps pe old password dalne ko bolta hai yr bhai concept yr op level **************

// --------------- hld ka part tha --------------








