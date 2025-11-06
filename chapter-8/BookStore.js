// **** route match honge : app.use -> alag tarike se kaam karengai
// **** app.get app.post app.patch app.put app.delete se alag type se work karengai
// **** so app.use pe "/" niche likho -> kyuki ye sochta hai ki "/.../" iske ander nested check hoga and all -> so confusing only prefix match
// **** app.get wagera full match "/.." karenga and work karega
// basically app.use kisi ko bhi use kar shakta hai -> get post patch put

const express = require("express")
const app = express(); 


const BookStore = [
    {id:1,name:"Harry Potter",author:"devplus"},
    {id:2,name:"friends",author:"vikas"},
    {id:3,name:"nexus",author:"rohit"},
    {id:4,name:"dost",author:"vikas"}
]

app.use(express.json()); // for post

// **** sabko function socho and work karo
app.get("/book",(req,res)=>{
    res.send(BookStore);
})


// **** **body se data bhejegai -> when data send in json format from client to server -> pehle type change kar deta tha ->** per ab format maintain karke rakhta ka in json format in both client and server and at last js object pe convert hota hai -> jab se new new parser aye hai tab se ye sab maintain rehte hai ache se ----> **** localhost://book?author=aniket check ki string pe hai ki ni
// **** but jab link ke through bheje gai toh string treat kiya jayega -> localhost:3000/book/3
// query paramter(?author=aniket) -> localhost://book?author=aniket -> so ab ye info lake de dega sari  -> and in postman this fetches data from db
// ******* (?author=aniket) -> filteration hai ye sidha sidha -> query ke sath kare ----> body ka use na kare isme use body in put patch post pe bs 
// **** body ke sath only sensitive data send kare bs -> body ko koi bhi access ni kar shakta na ---> and isko koi bhi access kar shakta hai localhost:3000/book/3
// question -> vikas naam ke author ki details mil jaye -> body pe ni bhejo params pe key:value author:vikas pe auto fill ayega in get request jab apan ye likhegai toh -> localhost:3000/book?author=vikas 
app.get("/book",(req,res)=>{
    console.log(req.query);
    const book = BookStore.filter(info=>info.author===req.query.author)
    res.send(book);
})


app.get("/book/:id",(req,res)=>{
   const id = parseInt(req.params.id); // as a string ayega pasreint use karo
   const Book = BookStore.find(info=>info.id==id);
   res.send(Book)
})


app.post("/book",(req,res)=>{
    console.log(req.body)
    BookStore.push(req.body)
    res.send("data saved successfully")
})

// ------------------------------------------------------------------------

// patch ->multiple values change karna hai

app.patch("/book",(req,res)=>{
    const Book = BookStore.find(info=>info.id === req.body.id);
    if(req.body.author){
        Book.author = req.body.author
    }  // handle edge cases
    if(req.body.name){
        Book.name = req.body.name
    }

    res.send("patch successful");
})

// or use put or patch

// put request
app.put("/book",(req,res)=>{
    const Book = BookStore.find(info=>info.id === req.body.id);

    Book.author = req.body.author
    Book.name = req.body.name

    console.log("put successful");
})


// delete

app.delete("/book/:id",(req,res)=>{
   const id = parseInt(req.params.id) // string format pe ata hai so int pe karo

   const index = BookStore.findIndex(info => info.id === id)
   BookStore.splice(index,1) // itne element delete karna hai yaha(index) se
   console.log("deleted success")
})


app.listen(3000,()=>{
    console.log("server is listening on port 3000");
})


