const express = require("express")
const app = express();
const {Auth} = require("./middleware/auth")

app.use(express.json());



// ---------------ERROR HANDLING-----------------------------------------------
// -> by try catch block
// -> try catch ke ander throw chalta hai


// sample code for try catch
app.get("/dummy",(req,res)=>{
    try{
       
        // ********q1 -> jab json.parse() se parse(convert into js object) kar shakte hai toh -> iska use app.use(express.json()); kyu karray hai --> **** at the end app.use(express.json()); use json.parse(json) -> but jab normal json.parse(json) use kare gai toh bohot sari dikkate ayegi 
        //                 ****  data aya in 0/1 stream form -> json.parse() ke ek sath data chaiye and data 1by1 ata hai so express.json() handle 1by1 data thik dhire dhire  
        
        JSON.parse({"name":"aniket"}); // wrong likhe hai json na so error ayega   
        throw new Error("error agya bhai yr") // agar error aya so ye screen pe dikhai dega
    }catch(err){
        res.send(`error: ${err}`);
    }
})

// **** so use error handling by try catch in all routes

// ----------------------------------------------------






// swiggy project


// db : array

const FoodMenu = [
    {id:1,food:"chowmin",category:"non-veg",price:"50"},
    {id:2,food:"butter naan",category:"veg",price:"506"},
     {id:3,food:"chowmin rice",category:"non-veg",price:"350"},
    {id:4,food:"butter paneer",category:"veg",price:"250"},
     {id:5,food:"egg roll",category:"veg",price:"501"},
    {id:6,food:"butter roti",category:"non-veg",price:"40"},
     {id:7,food:"kabeb",category:"veg",price:"60"},
    {id:8,food:"lolipop",category:"veg",price:"520"},
     {id:9,food:"paneer roll",category:"non-veg",price:"1250"},
    {id:10,food:"egg curry",category:"veg",price:"520"},
     {id:11,food:"puri",category:"veg",price:"504"},
    {id:12,food:"butter daal",category:"non-veg",price:"150"},
     {id:13,food:"chowmin roll",category:"veg",price:"350"},
    {id:14,food:"butter masala",category:"veg",price:"5220"},
     {id:15,food:"chowmin curry rice",category:"non-veg",price:"150"},
    {id:16,food:"butter handi paneer",category:"veg",price:"530"},
     {id:17,food:"chowmin paneer rice",category:"veg",price:"5320"},
    {id:18,food:"noodles",category:"veg",price:"530"},
]


const AddToCart = [] // user add to cart karega so isme add hoga


app.get("/food",(req,res)=>{
    res.status(200).send(FoodMenu);
})


app.post("/admin",Auth,(req,res)=>{

    // add item into food menu
    FoodMenu.push(req.body)
    res.status(201).send("item added successfully")
   
})


app.delete("/admin/:id",Auth,(req,res)=>{

     const id = parseInt(req.params.id)

     const index = FoodMenu.findIndex(item=>item.id===id)

     if(index===-1){
        res.send("item doesn't exists");
     }else{
        FoodMenu.splice(index,1);
        res.send("successfully deleted");
   }
})


app.patch("/admin",Auth,(req,res)=>{

     const id = req.body.id;

     // **** fooddata se FoodData pe chnage ho jayega beacuse object hai call by reference hota hai yaha ke change pe waha bhi change ho jayega
     const fooddata = FoodMenu.find(item=>item.id===id)

     if(fooddata){
       
        if(req.body.food)
            fooddata.food = req.body.food;
        if(req.body.category)
            fooddata.category = req.body.category;
        if(req.body.price)
            fooddata.price = req.body.price;

        res.send("successfully updated");
     }
})


// ---------------new work and use try catch in each one----------------------------------------------

// item add in cart array
app.post("/user/:id",(req,res)=>{
   try{
    const id = parseInt(req.params.id)
    const foodItem = FoodMenu.find(item=>item.id===id);

    if(foodItem){
        AddToCart.push(foodItem)
        res.status(200).send("item addedd successfully");
    }else{
        res.send("item not  delivered");
    }
   }catch(err){
    res.send("error"+err);
   }
})


// remove item form cart
app.delete("/user/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const index = AddToCart.findIndex(item=>item.id===id);

    if(index!=1){
        AddToCart.splice(index,1);
        res.send("item removed")
    }else{
        res.send("item not present un cart");
    }
})


// show items of cart
app.get("/user",(req,res)=>{
   if(AddToCart.length==0){
    res.send("cart is empty")
   }else{
    res.send(AddToCart);
   }
})



app.listen(3000,(req,res)=>{
    console.log("listening on port 3000")
})