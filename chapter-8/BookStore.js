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
    {id:3,name:"nexus",author:"rohit"}
]

app.use(express.json()); // for post

// **** sabko function socho and work karo
app.get("/book",(req,res)=>{
    res.send(BookStore);
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
   const id = req.params.id

   const index = BookStore.findIndex(info => info.id = id)
   BookStore.splice(index,1) // itne element delete karna hai
   console.log("deleted success")
})


app.listen(3000,()=>{
    console.log("server is listening on port 3000");
})