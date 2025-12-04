// 1) mongodb internals

// image1 -> {} -> document -> each line inside {} is field -> field have key:value pair data

// queries on mongodb -> insert , update , delete , find 
// **** internal follow b+ tree structure for indexing

// insert -> db.collection.insertOne({key:value})
// update -> db.collection.updateOne({key:value},{ $set: {key:newValue} })
// delete -> db.collection.deleteOne({key:value
// find -> db.collection.find({key:value})

// indexing -> create index on field -> faster search on that field
// create index -> db.collection.createIndex({field:1}) -> 1 for ascending , -1 for descending





// 2) -> SSD internals and indexing ka kya fayda h ssd pe 


// image2 -> ssd pe 1 by 1 data store krta h -> slow hota h 0(n) time complexity
//        -> data not is in sorted form jaise data aara hai waise hi store karray hai
//        -> unsorted form pe data hai so -> 0(n) time lagega
//        -> **** WRONG -> chalo indexing se data sorted form me store karte h -> faster search -> 0(log n) time complexity
//                    | PROOF
// **** image3 -> normal binary search se search krte h -> 0(n) time complexity lagta h -> isme hmko calculation karna padra h ki ye data is index pe hai and calculation position by index -> so 0(n) time complexity lagta h
// **** image4 -> kya hai data ka size fix ni hai in ssd -> data ka size variable hota h -> variable size data pe binary search tree work ni krta h -> so manually search karna hota hai and time complexity badh jata h -> **** 0(n) ho jata h
// -> so linear lagaye and binary lagaye dono me 0(n) time complexity aa rha h -> indexing ka koi fayda ni h


// -> image5 -> INSERT 
// -> unsorted form + data insert karray hai so last pe data insert kardo direct -> 0(1) time complexity lagta h
// -> sorted form me data insert karna hai -> pehle iska correct place find karo then data insert karo and baki sabko 1 1 place shift karo -> 0(n) time complexity lagta h
// -> **** so sorted form me data insert karna bhi costly h


// -> DELETE
// -> sorted unsorted dono form me data delete karna same hi h -> pehle data find karo fir delete karo then 1 1 place shift karo -> 0(n) time complexity lagta h


// -> UPDATE
// -> sorted unsorted dono form me data update karna same hi h -> pehle data find karo space banao update karne ke liye by 1 by 1 shift fir update karo  -> 0(n) time complexity lagta h


// -> **** SO INDEXING(SORTING) KA KOI FAYDA NI H SSD PE -> 0(n) time complexity hi lagta h chahe indexing kardo ya ni kardo 



// ******** -> image6 -> agar ye kardiye toh -> so ab iske uper(id address) indexing ka fayda hoga binary search laga shakte hai for finding element and sort kar diye indexing table walo ko -> and beacuse inka size fix hota hai toh binary search apply kar sakte hai  
//                    -> so hm (id,address)(indexing table) walo se data easily mil jata hai -> 0(log n) time complexity lagta h
// ******* but ssd wale pe binary search ni laga sakte h because data ka size variable hota h -> so indexing table walo ka fayda h ssd pe bhi -> because unka size fix hota h -> so binary search laga sakte h indexing table pe -> and fir indexing table se ssd wale data ko access kar sakte h -> so indexing table walo ka fayda h ssd pe bhi -> 0(log n) time complexity lagta h




// ******** ----> image7 -> let 8gb ram hai 4 byte ka address h -> so 8*1024*1024*1024 bytes = 2^33 bytes so sabko address dene hongai -> so 4(means 2^2)byte = (2 bit) ko address de shakte hai by -> 1 = 00 , 2 = 01 , 3 = 10 , 4 = 11 and har address ka size 2-2 bit hai -> so yaha har ek bit ka size 64 64 bit ka ho jayega and 2^33 byte ko address karne ke liye total 33 bit lagegi but 16,32,64 hota hai so round off karke 33 ko ****64bit langai (8 byte ka address hone wala hai) -> so 2^33 / 2^2 = 2^31 addresses milenge -> so 2^31 addresses ko ram me store kar sakte h -> so indexing table ka size ram ke andar aa jayega -> so indexing table ram me rahega and ssd pe data rahega -> so indexing table se data ko access karenge -> fast access hoga -> 0(log n) time complexity lagta h
// **** ye 4 byte wala example tha and real wala 8gb ram wala tha
// mota mota in 8gb ram -> so total 2^33 byte ko store karana hai -> so 2^33 ko kitne address dene hongai so 2^33 address dene hongai -> so 1 address ko identify karne ke liye 33 bit lagegi -> but 33 bit ka address ni hota h so round off karke 64 bit ka address lenge -> so 64 bit = 8 byte ka address h -> so 8 byte ka address lenge -> so 2^33 / 2^3 = 2^30 addresses milenge -> so 2^30 addresses ko ram me store kar sakte h -> so indexing table ka size ram ke andar aa jayega -> so indexing table ram me rahega and ssd pe data rahega -> so indexing table se data ko access karenge -> fast access hoga -> 0(log n) time complexity lagta h 
// **** image8 -> so hmne yaha suppose kara hai ki both id and address takes 2 2 byte so 3000 , 3004 , 3008 -> per real pe koi 4 byte ka hoga and 8 byte ka hoga -> so easily binary search laga shakte hai in indexing table pe direct access in ssd
// same for 8 byte -> 0 = 000 , 1 = 001 , 2 = 010 , 3 = 011 , 4 = 100 , 5 = 101 , 6 = 110 , 7 = 111 -> so 2^33 / 2^3 = 2^30 addresses milenge -> so indexing table ka size ram ke andar aa jayega -> so indexing table ram me rahega and ssd pe data rahega -> so indexing table se data ko access karenge -> fast access hoga -> 0(log n) time complexity lagta h

// **** ---> so ssd pe sorted data rakhne ka koi jarurat ni hai jaha space mile waha rakh do data in ssd -> so ab kisi ko shift ni karna padega -> so insert , delete , update fast ho jayega -> 0(1) time complexity lagta h ye sabme
// image9 ----> but indexing table me sorted form me data chaiye -> and new data insert hua so isme hmko shift karna padega and sahi jagah pe data insert hoga -> so indexing table me insert , delete , update me 0(logn) time complexity lagta h
// **** as we are using ARRAY in indexing table -> so searching me 0(log n) time complexity lagta h by binary search -> insert , delete , update me 0(n) time complexity lagta h because shifting karna padta h array me so use another data structure for indexing table -> TREES




// -> 4) BST use kar shakte hai but worst case me 0(n) time complexity lag sakta h -> so balanced tree use karte h -> AVL , Red black tree use kar shakte hai but ye dono me har node pe 2 hi children hote h -> so height zyada ho jata h -> height zyada hone se search me time complexity badh jata h
// -> so b+ tree 0(logn) use karte h -> b+ tree me har node pe multiple children hote h -> so height kam ho jata h -> height kam hone se search fast ho jata h -> so b+ tree use karte h indexing ke liye

// -> **** why trees -> jaruri ni hai unique id integer hi ho kuch bhi ho shakta hai -> string and iska size fix ni ho shakte hai so no need to worry about size -> so trees use karte h jisme ****variable size data ko store kar sakte h and searching fast hota h
//                   -> kisi ke hisab se bhi(id = int,string) data ko sort kar sakte h -> so trees use karte h jisme sorting bhi ho jaye and searching bhi fast ho jaye
//                   -> no need to worry about size of data -> so trees use karte h jisme variable size data ko store kar sakte h
//                   -> string hai toh char by char compare kar sakte h -> so trees use karte h jisme char by char comparison ho jaye and searching fast ho jaye and int hai toh digit by digit comparison kar sakte h -> so trees use karte h jisme digit by digit comparison ho jaye and searching fast ho jaye


// **** b+ tree -> balanced tree hota h -> har node pe multiple children hote h -> height kam hota h tree ka
//              -> height kam hone se search fast hota h -> 0(log n) time complexity milta h
//              -> leaf node pe hi saara data store hota h -> sequential access fast hota h


