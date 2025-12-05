// -> mongodb+srv://aniket:aniket@coderarmy.cobyls8.mongodb.net/


// 1) mongodb installation


// ----------------------------------------------------------------------------------
//  -> cluster -> database -> collections -> documents -> fields(key:value pairs)
// ----------------------------------------------------------------------------------

// mongodb -> is a ******application layer -> db ko manage karne ke liye
// mongodb -> NoSQL database -> document-oriented database
// NoSQL database -> non-relational database

// ----> user -> mongodb (application layer) -> database (data store karne ke liye) -> collections (tables) -> documents (rows)

// -------------------------------------------------------


// 2)  2 ways to use mongodb
// 1. use mongodb atlas -> cloud database -> online database(free 512mb then pay money) -> scale easily(pay paisa)
// 2. use mongodb locally -> local database -> offline database
//                        -> locally install mongodb -> some portion in sec memory work like db and we use it
//              |
//              \/                         
// step 1: download mongodb from official website -> https://www.mongodb.com/try/download/community
// step 2: install mongodb -> follow the installation steps
// step 3: after installation, create a folder for mongodb data -> C:\data\db
// step 4: start mongodb server -> open command prompt and run the command -> mongod
// step 5: open another command prompt and run the command -> mongo



// ----------> using online mongo atlas database

// 1) create an account on mongodb atlas -> https://www.mongodb.com/cloud/atlas/register
// 2) create a cluster -> free cluster
// 3) create a db user -> username and password
// 4) network access -> allow access from anywhere -> mumbai region select kar sakte ho
// 5) connect to your cluster -> connect your application -> copy the connection string -> mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// ****6) choose compass wala option -> download and install mongodb compass -> GUI for mongodb -> visualize and explore your data
// 7) replace <username> and <password> with your db user credentials
// 8) use this connection string in your application to connect to the database.


// -----> cluster means -> a group of servers that work together to store and manage your data.
//                      -> cluster -> multiple servers -> data is distributed across multiple servers -> high availability and scalability.
//                      -> replicas create karke khud rakhta hai data ko safe rakhne ke liye. -> if 1 db fail other db take over kar lega -> user get data without any interruption.
//                      -> replica set -> a group of mongod instances that maintain the same data set -> provide redundancy and high availability.
//                      -> primary node -> secondary nodes -> automatic failover -> if primary node fails, one of the secondary nodes is automatically promoted to primary.
// -> replica free milta hai mongodb atlas me free tier me bhi.
// -> **** 512 mb free milta hai wo -> replicas ke sath(include karke). -> cluster ka size 512 mb total hota hai

// **** -> sharding free me nahi milta mongodb atlas me -> sharding -> horizontal scaling -> distribute data across multiple servers -> ki data inc hogya so -> khud hi new server add kar dega -> performance maintain rahegi. -> large scale applications ke liye use hota hai -> paid feature hai mongodb atlas me.



// -> db user -> a user that has access to the database.
// -> network access -> allow access from anywhere -> allow access to the database from any IP address. -> 0.0.0.0/0
// -> ******** basically mongodb not have there own server -> they use cloud service providers like AWS, GCP, Azure etc to host their servers. -> mongodb pay paisa to these cloud service providers.



// ----------------------------------------------------------


// ******** basically compass ek GUI tool hai jo mongodb ke sath interact karne ke liye use hota hai. -> visualize and explore your data. -> create, read, update, delete operations perform kar sakte ho without writing any code.

// 3) how to connect with cluster 

// ----> open mongodb compass (ui tool for mongodb) 
// ----> paste the connection string -> mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// ----> replace <username> and <password> with your db user credentials
// ----> click on connect button -> connect to the database
// ----> after connecting, you can see the databases and collections in the left sidebar
// ----> create a new database -> click on create database button -> enter database name and collection name -> click on create button
// ----> after creating the database and collection, you can see them in the left sidebar
// ----> click on the collection to view the documents
// ----> you can insert, update, delete documents using the GUI tool


// ----------------------------------------------------------



// 4) mongodb basic concepts

// -> jaise sqldb ke ander tables hote hai waise hi nosql db ke ander collections hote hai
// -> jaise sqldb ke ander rows hote hai waise hi nosql db ke ander documents hote hai 
// -> jaise sqldb ke ander columns hote hai waise hi nosql db ke ander fields hote hai


// -> externally -> mongodb me data store hota hai json format me -> javascript object notation
// -> **** internally -> mongodb me data store hota hai bson format me -> binary json -> binary representation of json -> more efficient and faster to process than json
// -> ****** mongodb me har document ka apna unique id hota hai (used for indexing) -> _id field -> automatically generate hota hai jab document create karte ho -> ObjectId type ka hota hai

// -> image1 -> **** mongodb me schema-less hota hai -> matlab har document ka structure alag ho sakta hai -> flexibility provide karta hai -> easily change kar sakte ho data structure ko without affecting other documents
// -> image2 -> frontend to -> backend to -> db (interactions by apis)

// -> so we have to install mongodb drivers in our backend application to interact with mongodb database.
// -> npm i mongodb -> to install mongodb driver in our nodejs application




// -> see code in database.js file for connecting with mongodb atlas cluster and performing db operations.


// -----> ******* and we use mongoose not use mongodb direct why ?
// -> ye same ayse hi hai ki use express instead of node 

// -----> ****** always dont share imp info anywhere(jwt and secretkey) 
// -----> ********** and always apply checks and validation in db -> so use mongoose






