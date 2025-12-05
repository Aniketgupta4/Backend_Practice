// ****** MONGODB -> but we not use mongodb -> we use mongoose

// ----------------------------------------------------------------------------------
//  -> cluster -> database -> collections -> documents -> fields(key:value pairs)
// ----------------------------------------------------------------------------------

const { MongoClient } = require('mongodb');

// Connection URL

// -> username(aniket : tk username) -> password(@ se pehle tk) -> cluster name / tk -> db name ? tk -> options
// ******** agar password pe use kare @(special character) so dikkat hai -> example of password -> aniket@123 -> so @ ko encode karna padega -> %40 se -> aniket%40123 
// -> @ is converted into its ascii(hexadecimal value) value -> %40
const url = "mongodb+srv://aniket:aniket@coderarmy.cobyls8.mongodb.net/coderarmyDB?retryWrites=true&w=majority&tls=true&appName=CoderArmy";
const client = new MongoClient(url); // class ka object bana rahe hai

// Database Name
const dbName = 'coding_mern';

async function main() {
  // Use connect method to connect to the server
  await client.connect(); // cluster se connect hue
  console.log('Connected successfully to server');

  const db = client.db(dbName);  // **** check ni karte ki db exist karta hai ya ni so not use async here
  const collection = db.collection('aniket');  // **** check ni karte ki db exist karta hai ya ni so not use async here

  
  // the following code examples can be pasted here...

  // ***** -> ye sab operations hongai toh check karta hai ki collection , db exist karta hai ya ni -> agar ni karta toh create kar dega automatically -> so hum pehle await use ni kare thay -> per isme hm await use karray hai await ka kyuki ye check karega ki db ya collection exist karta hai ya ni -> agar ni karta toh create kar dega automatically -> isliye await use kar rahe hai *****
    
// ------------------------------------------------------------------------------------
    // a) get all data 

      // **** -> collection.find({}) -> ye network call ni karta hai -> cursor(data pe point karta hai) return karta hai -> jisme saare documents hote hai -> fir uske baad toArray() method call karte hai jo ki network call karta hai aur saare documents ko array me convert kar deta hai and hmko db data lake deta hai *****
     
      // -----> wrong way -> kabhi ayse ni karna -> warna agar db pe 10gb ka data hai toh pura data memory me load kar lega -> performance issue hoga apna system pagla jayega
      // const findResult = collection.find({});
     //  console.log('Found documents =>', findResult);
     
     // -----> correct way -> cursor ek ek karke data laega -> memory me load ni karega pura data -> so performance issue ni hoga
      const findResult = await collection.find({}).toArray();
      console.log('Found documents =>', findResult);
      
      // or -> 1 by 1 karke bhi data la sakte hai cursor se -> for await loop use karke beacuse network call hori hai
      
      for await (const doc of findResult) { // ye network call karega yaha
        console.log(doc);
      }

// ------------------------------------------------------------------------------------

 
    // b) insert one document -> await use kare means network call jayegi db pe save hoga and apan ko res ayega done or not
      //    const insertResult = await collection.insertOne({ name: "Ankita", age: 22, city: "Pune" });
      //    console.log('Inserted document =>', insertResult);

// -----------------------------------------------------------------------------------

    // c) insert many
     //   const insertResult = await collection.insertMany([{ name: "Ani", age: 22, city: "Pune" },{ name: "Anu", age: 22, city: "Pune" }]);
     //   console.log('Inserted document =>', insertResult); 

// ------------------------------------------------------------------------------------

 
    return 'done.';
}

main() // calling main function
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());



// run it by -> node database.js