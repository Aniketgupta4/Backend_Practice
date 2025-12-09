// How Password store in db
// direct password ni store karte in db -> because db leak ho jate hai -> kuch jhol honge api mai toh leak ho shakta hai -> password is sensitive info so ye kisi ko bhi pata na chale so password ko hash karke store karte hai
// aj kl log alsi hogye hai sab jagay same password rakhte hai and email toh kahai bhi mil jati hai and agar password leak so email se password hacked yr so direct store ni karte password ko


// solution1 -> encrypt karke store karte hai password ko in db
//                   encrypt(key) 
//     aniket@321  <-------------->  abcdefksfka
//                   dcrypt(key)             
// **** generally 2 keys hoti hai 1 for encryption and 1 for descrytpion and 1 ki bs hoti for encypt decryp too known as symmetric key cryptography
// so jab apan login karengai so apan normal password dengai but ye internally password ke decrypt karke db se encrypted pass ko match karega if match then login hone dega
// isme ye dikkat hai ki -> ****key pata chal gya so phir se sab hack ho jayega 


// solution 2 -> design algo ki encrypt karle but koi dcrypt na kar paye that is 1 way encryption
//                  encrypt(key) 
//     aniket@321  -------------->  abcdefksfka
// so hashing introduce hua -> and bohot sari hashing algorithms hai choose any 1 -> ex -> sha256
// decrypt karna naamumkin hai -> beacuse ye algorithms pattern ni samjhne dete hai so decrypt karna bohto muskil hai
// pattern ni pakad pana in hashing -> is avalancher effect 
// hashing is 1 way -> so hacker sirf brute foce attack kar shakta hai pnc laga laga ke dekhna padega so ye karna immpossible hai manually karna hackers ke liye
// **** always use special character in password hack karna tough hota hai -> A-Z a-z 0-10 10 special chacater -> so total possibilites of characters is -> 26*26*10*10 = 676000 and itna pnc for each word in hashing is impossible to crack
// so store hashed password in db 
//                     encrypt
//     aniket@321  -------------->  abcdefksfka
//                     SHA256
// ye hash chori hogya so hacker kuch ni kar shakta -> find karna match bohot tough hai password ka 
// 256 byte ka hash generate karta hai 1 password -> SHA256 algorithm
// this is not used in real world for store password beacuse -> hackers ne iska bhi solution find kar chuke hai -> hackers have rainbow table -> common passswords ke hash hai isme so find kar shakte hai easily password if password is very common so rainbow table se hash match and password mil jata hai -> so again password hacked
// so salting introduce hua


// solution 3 -> hashing + salting(any string)
//                           encrypt
//     aniket@321 + salt  -------------->  abcdefksfka
//                             SHA256
// -> password + salt ka hash find karna toh impossible hi hai so hacker find ni kar shakta password
// -> so apan isko db pe store karate hai hash + salt passwrd wale ko  
// -> **** but agar dhoke se leak hogya so password leak again -> so ye batao sabke liye same salt use karna chaiye ki diff salt use karna chaiye -> 
// -> agar diff diff salts hai wo store karna hoga kahi so storage lagega and dikkat hi hai ye ek info rakhna ki kiske mai ye salt hai kiske mai or koi sa salt hai so issue hi hai ye multiple salts ka concept
// -> same salt use kare for all passswords so -> issue ye hai ki bohot high chance hai ki multiple users ka same hoga ex -> 123456+salt of 20000 people and iska hash db pe store kara diya so -> and if db leak kabhi so ye 20000 logo ka same password hai so hacker isko manually hack karne ka try karega and possibility hai hack ho jayega so 20000 log ka data gya 1 baar mai and salt bhi pata chal gya so phir password hack
// -> **** so differnet different salt use karna is feasible solution for diff diff users -> hack kar shakta hai per bulk pe hack ni kar shakta -> kyuki alag alag salt hai na 
// -> so ab ye diff diff salt ko store karna is issue -> overhead
// -> and ye sab salt db pe store hongai -> normally store hote hai direct -> without hashing normal 
// -> **** impossible hai lagbhag password + salt -> se hash find karna and agar mil gya so 1 ka hi pwd leak hoga

// -> **** password is in hash form -> and password + salt -> hash generate 
// -> **** salt and hash ko store karna hoga in db

// install bcrypt -> npm i bcrypt


const express = require("express")
const app = express()
const bcrypt = require("bcrypt")

const password = "aniket@321"


// -> hashcode
// slow process -> so await use karo and function pe wrap up kardo

// async function hashing(){
// // **** this will self generate salt diff diff for diff diff user -> on same password or on diffenrent password -> sabke liye diff salt generate karega 
// const hashpassword = await bcrypt.hash(password,10)
// // 10 -> ka mtlab hai -> is algo ko 2^10 baar ye algo ko run karo -> or jitna value jyada hogi utna slow hoga algo
// console.log(hashpassword)
// }

// hashing();




// -> **** see image1 -> value change karo and time notice karo algo slow hote jayegi -> as value increase algo run hone ka time slow hoga
// ********** jitna slow algo hogi -> utna time lagega hacker ko hash find karne mai
// **** and agar hm iska value jyada rakh diye so so hmko hi dikkat hogi -> apna password hone mai bohot time lagega so ux kharab hoga so generally 10 se 12 tk hi use karte hai max to max

// async function hashing(){
// console.time("hash")
// const hashpassword = await bcrypt.hash(password,10) // value increase karte jaye so algo slow hote jayega jyada time lagega hash generate karne mai
// console.timeEnd("hash")
// }
// hashing();




// -> hashing + salting

async function hashing(){
const salt = await bcrypt.genSalt(10); // salt generate karte hai
const hashpassword = await bcrypt.hash(password,salt)
console.log(salt)
console.log(hashpassword)
}

hashing();

// salt ->                               $2b$10$RoTb8/pZz1tjdp.iwOXcg.
// hashpassword ->                       $2b$10$RoTb8/pZz1tjdp.iwOXcg.9u/0cwqgynzCVQDqrL6Df9/AMtBGynW
// image2 -> read kaise karte hai isko -> 2 means version of bcrypt -> 10 number of rounds in hash or salt -> then actual salt(22 chars) present hota hai and -> iske baad actual hashcode(31 chars) hota hai 
// **** hashpassword ko store karate hai in db and isme hi sab store hota hai salt kya hai kitne baar wo kare hai and all and dekho salt ka value hai in hashpassword 


// **** when we login then apan jo pssword dale usme salt add hoga 10 round wo hoga and version 2 of bcrypt pe and ye pwd generate hoga and match hoga form db password and if match both password then login otherwise not -> so **** hashpassword mai itna sara info store hota hai 




// -> check hash and password same or not

async function hashing(){
const salt = await bcrypt.genSalt(10); // salt generate karte hai
const hashpassword = await bcrypt.hash(password,salt)

const ans = await bcrypt.compare(password,hashpassword)
console.log(ans) // -> true means both are correct and false if anything is incorrect
}

hashing();



app.listen(3000,()=>{
    console.log("listening at port 3000")
})