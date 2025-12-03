// internals of database

// 1) **** for transactions sql is best but as social media grow so sql is not feasible for social media sites

// EXAMPLE -> build social media via sql ->
// -> image1 -> so bohot sara data hoga(10 crore people ka data) of a website -> store in row column form so max 10000 crore entries hongi
// -> image2 -> and suppose new feature intorduced in wedsite -> so sql db pe store karana padega -> and new column add karna padega and baki pehle walo mai(10000 crore users pe) bhi entries karna hoga -> **** i.e. pain point and tough hai yr bohot purane walo pe bhi data add karna
// -> image3 -> ssd pe ek sequence pe rows store ni hoti hai -> beacuse we dont know the size of row each rows are of diff size ex -> kisi ke mai 10000 likes aye and kisi ke mai 100 likes aye so size differ in rows -> so agar new column add hua toh ssd pe jake bhi ek ek row find karke update karna padega -> so bohot time lagega -> so sql is not feasible for social media sites
//           -> jaruri ni hai ki space khali ho ssd pe rows ke agal bagal pe -> so fragmentation bhi ho sakta hai -> so aur time lagega -> and kisi row ke aas pass space ni hai so new location pe store karna padega and yahi 1000 crore entries ke sath karna hoga toh pagal ho jayegai -> and pointer maintain karna padega -> so aur time lagega -> so sql is not feasible for social media sites


// -> image4 -> nosql and sql db difference
// -> image5 -> sql example -> not a good way to store data for a user -> beacuse redundant data bar bar aara hai -> so storage increases
// -> **** image6 -> so Normalization aya data redundancy kam karna -> data consistency increase hui -> so multiple tables(t1 and t2) pe break kare 1 table ko and unko join karte hai by queries to perform operations -> so complex queries ke liye sql best hai
//                -> 2 tables hai users ka data hai so ek mai user id name and email hai and dusre mai user id and address hai -> so jab bhi user ka data chahiye toh (join) karna padega dono tables ko -> so complex queries ke liye sql best hai
// -> image7 -> and make primary key(amaz_id -> unique one -> to identify u uniquely) in t1 and (amaz_id)foreign key in t2 -> so constraints to maintain data integrity
// so by normalization -> data redundancy kam hua -> data consistency increase hui -> mota mota multiple tables mai break karte hai and unko join karte hai by queries to perform operations -> ki 1 table se dushri table se related data lena -> id se order find karna 1 user ka hi b/c iska data split hogya hai multiple tables -> so complex queries ke liye sql best hai

// -> **** per in sab mai bohot time lagta hai and dimag kharab alag hota hai -> so social media mai sql db use ni karte hai





// 2) -------------- NOSQL(Not only sql) DATABASE (not follow acid properties)------------------

// -> **** image4 -> nosql (mongodb) -> document based db -> json format mai data store karta hai -> so no need to break data into multiple tables -> so data redundancy jyada hai but data consistency kam hai -> but social media mai data consistency itni jaruri ni hai -> ex -> fb pe apne profile mai address change kiya toh wo turant dushro ke feed mai reflect ni hoga but thodi der baad hoga -> so social media mai nosql db use karte hai beacuse of scalability and flexibility
// {} -> document and iske ander each line is a field and in field we have key and value pair -> so json format mai data store karta hai
// -> so isme normalization ni karna padta na joins perform karna padta hai -> so fast hai -> and ssd pe sequentially store karta hai data -> so fast read and write operations -> and easy to scale bhi hai -> so nosql db social media sites ke liye best hai





// 3) ----> scaling of db -> jb data bohot jyada ho jata hai storage full hogi toh db ko scale karna padta hai to store more data -> so ki db efficiently kaam kare
// -> 2 types of scaling -> vertical scaling(cpu ram increase karna) and horizontal scaling(server scale karna)
// -> sql db mai vertical scaling hota hai -> matlab ek hi server pe jyada resources(ram, cpu) add karte hai -> but ek limit hoti hai ki kitna resources add kar sakte hai -> so ek limit ke baad ni badha sakte -> so sql db mai vertical scaling hota hai
// -> **** nosql db mai horizontal scaling hota hai -> matlab multiple servers add karte hai -> so jb bhi data jyada hoga toh naya server add kar denge -> so easily scale kar sakte hai -> so nosql db social media sites ke liye best hai

// -> vetical scaling have limitations -> ki ek limit mai hi ram and cpu badha sakte hai (1 chiz dushre se combine hoti hai ram inc so rom bhi inc karao so jyada costly)
// -> but horizontal scaling mai multiple servers add kar sakte hai -> so nosql db social media sites ke liye best hai

// **** -> image8 -> but in sql db we cant do horizontal scaling beacuse of ****complex joins and transactions(table1 server1 pe hai and table2 server2 pe hai so join lagana is tough) -> so sql db mai horizontal scaling ni hota hai
// -> **** but nosql db mai horizontal scaling hota hai beacuse no complex joins and transactions -> ek sath data hota hai(1 hi server pe) -> so nosql db social media sites ke liye best hai





// 4) ----> sharding -> jb data bohot jyada ho jata hai toh db ko horizontally scale karte hai by adding multiple servers -> so data ko multiple servers pe distribute karna padta hai -> so is process ko sharding kehte hai
// -> image8 -> so data ko multiple servers pe distribute karna padta hai -> so is process ko sharding kehte hai
// -> 3 servers hai -> and data ko 3 parts mai divide kar diya hai and har part ko alag alag server pe store kar diya hai -> so is process ko sharding kehte hai
// -> ki 1 - 100000 server1 pe store hai , 100001 - 200000 server2 pe store hai , 200001 - 300000 server3 pe store hai
// -> so nosql db social media sites ke liye best hai beacuse of scalability and flexibility





// 5) data ka single copy is correct way or not -> data corrupt so sab gaya -> **** subscription purchase kiya tha but data corrupt ho gaya -> so data loss ho gaya -> so is problem ko kaise solve karenge by replica
// -> so is problem ko solve karne ke liye ----> replication use karte hai
// -> replication (distributed computation) -> data ka multiple copies maintain karte hai alag alag servers pe -> so jb bhi ek server fail ho jata hai toh dusre server se data le sakte hai -> so data loss ni hota hai
// -> image9 -> server1 ka data server2 and server3 pe bhi copy store karte hai -> so jb bhi server1 fail ho jata hai toh server2 or server3 se data le sakte hai -> so data loss ni hota hai
// -> replica set -> ek primary server and multiple secondary servers hote hai -> so jb bhi primary server fail ho jata hai toh secondary server primary ban jata hai
// -> this is best way to maintain data availability and fault tolerance
// -> so nosql db social media sites ke liye best hai beacuse of scalability and flexibility and replication

// -> **** costly hai per sahi hai scaling sharding and replication ke sath -> but social media sites ke liye ye sab karna padta hai beacuse of bohot sara data and users
// -> basically server (db) handle ni kar shakta itna sara data -> so replicas wagera create kare for easy one

// -> **** image10 -> replica banaye so load balancers aye ki equal req send to servers ki 1 pe load jyada na ho jaye




// ----> **** challanges in distributed system -> ki 3 no db ko sync pe rakhna (same data rakhna in all 3 dbs in write and update query) 
// -> ****sql -> transcation walo ne bol diya ki data consistent chaiye hmko ek sath
//               image11 -> ki inconsistency na aye write or kahi kiya and read kahi kara and update ni hua so dikkat hai na 
// -> so 1 rule follows ->
// -> ki jab bhi write karna hai so main server pe karogai hamehsa master pe and master lock other slaves ki unse ab koi read perform na kar paye and master update all slaves then master unlock all slaves so perform read operations too and write too


// -> ****nosql pe bhi ayse hi hota hai -> write in master for example likes hai so increase lakhs of likes in a sec so koi kuch read kara koi kuch read kara -> so isse koi dikkat ni hai waise beacuse social media hai -> per sql pe transaction wale pe master lock kar deta tha strict hai wo per yaha nosql pe chalta hai inconsistency -> so CAP theorem introduced



// 6) CAP theroem introduced -> cap theorem kehte hai ki distributed system mai 3 chize hoti hai -> consistency , availability , partition tolerance
// -> consistency -> ki sabko same data dikhna chaiye -> jaise sql mai hota hai -> so jo bhi write hoga wo sabko same dikhna chaiye
// -> availability -> ki sabko data milna chaiye -> chahe data thoda purana hi kyu na ho -> jaise nosql mai hota hai -> so jo bhi read karega usko data milna chaiye chahe wo thoda purana hi kyu na ho
// -> **** partition tolerance -> ki agar network mai koi problem aayi toh bhi db kaam karta rahe -> so db down ni hona chaiye
// partiton tolerance is must in distributed system beacuse network mai problem aati rehti hai so db down ni hona chaiye

// -> **** cap theorem kehte hai ki in 3 mai se sirf 2 chize hi mil sakti hai ek sath -> so sql mai consistency and partition tolerance hota hai but availability ni hota hai -> aur nosql mai availability and partition tolerance hota hai but consistency ni hota hai
// -> so social media sites ke liye nosql db best hai beacuse of availability and partition tolerance -> ki sabko data milna chaiye chahe wo thoda purana hi kyu na ho and agar network mai koi problem aayi toh bhi db kaam karta rahe -> so db down ni hona chaiye

// ******** -> mongodb(nosql but behave like sql too) -> flexible hai apan isko availabilty se consistencty pe le ja sakte hai thoda bohot -> jaise likes ka count hai so wo thoda purana hi kyu na ho lekin address change kiya toh wo sabko same dikhna chaiye -> so apan isko availability se consistency pe le ja sakte hai thoda bohot -> so social media sites ke liye nosql db best hai beacuse of scalability and flexibility and replication and cap theorem
// -> social media pe consistency itni jaruri ni hai -> so nosql db social media sites ke liye best hai availability and partition tolerance ke sath -> because availability and partition tolerance is must in distributed system 


