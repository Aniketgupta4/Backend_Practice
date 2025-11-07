// project -> swiggy backend -> image1
//         -> admin can add restaurant,food price manage,delete food
//         -> normal user visit/see all food items, and add food to cart,delete item from cart,look cart

// **** imagestatuscode -> status code is necessary otherwise system corrupt sometimes
//             -> image2 why to use -> kisi karan se server pe kuch error agya thik -> se send normal error "internal server error" or .... ye frontend pe show hoga -> **** but developer ko error samjh ni ayega because sirf error display hua hai "not found ye wo" jo fixed hmne likha hai -> so status code hai for each type error and send always error msg + code -> so ye code dekh ke samjh jayega ye karna hai 
                                 //    and error msg pe kuch bhi likh dete hai so samjh ni ayega -> so statuscode use(universally approved) karo defined hai samjh ajeyag ki kya karna hai ab code dekh hai error or correct  



const express = require("express")
const app = express();
const {Auth} = require("./middleware/auth")

app.use(express.json());


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


// ------------------------------------------------------------------------

// middleware bana do kyuki same code likha hai get put post pe to validate admin 
// authenticate in middleware


// app.use("/admin",(req,res,next)=>{
//    const token = "abcdef"
//    const access = token === "abcdef" ? 1 : 0

//    if(!access)
//     res.status(403).send("no permission"); // permission ni hai so yahi se res send kardo

//    next();
// })

// **** or write this is middleware file

// app.use("/admin",Auth)

// **** or direct use Auth in req pe

// ------------------------------------------------------------------

// **** admin kaise pata chalega -> admin kuch specific work kar shakta hai -> normal user na kar paye infect user not get admin access
//  authentication (verify karna) ki mai yahi hu by valid email and password and
//  authorization mere pass kya kya power hai after login 

app.post("/admin",Auth,(req,res)=>{

   // auth karna padega yahi user hai ki ni
   // abhi ke liye dummy code baad mai proper karengai
   // const token = "abcdef"  // write this in middleware
   // const access = token === "abcdef" ? 1 : 0


    // add item into food menu
    FoodMenu.push(req.body)
    res.status(201).send("item added successfully")
   
})


app.delete("/admin/:id",Auth,(req,res)=>{
    // auth karna padega yahi user hai ki ni
   // abhi ke liye dummy code baad mai proper karengai
   // const token = "abcdef"  // write this in middleware
  // const access = token === "abcdef" ? 1 : 0


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
    // auth karna padega yahi user hai ki ni
   // abhi ke liye dummy code baad mai proper karengai
   // const token = "abcdef"   // write this in middleware
   // const access = token === "abcdef" ? 1 : 0


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


app.listen(3000,(req,res)=>{
    console.log("listening on port 3000")
})