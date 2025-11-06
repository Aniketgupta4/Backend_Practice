// **** api -> is a function call and ye hame answer lake deta hai -> internal kaisa hai matlab ni bs hame isko use karna hai -> call api and it will give answer -> **** only follow api format to call like postman 

// middlewares

const express = require("express");
const app = express();


// **** cant send 2 or multiple response -> res.send("") -> beacuse 1st res.send ke sath hi header section attach karke bhej diya so second res.send ke liye header section ni hai so 2nd res.send not work
// **** bar bar req send karta hai postman -> if multiple res.send is their and some error is there
app.use("/user",(req,res)=>{  // only this function executes
   console.log("first");   // in terminal
   res.send("hello");      // webpage pe
   console.log("first last");
   // res.send("not work")
},
(req,res)=>{                // **** 2nd function not execute -> ye bhi work kare so use next(); -> uper -> ki niche wala bhi chale
    console.log("second");
    res.send("hello i am second");
    console.log("second last");
}
)



// next() -> **** 2nd function not execute -> ye bhi work kare so use next(); -> uper -> ki niche wala bhi chale

// route handler
// {  
//    console.log("first");  
//    res.send("hello");      
//    console.log("first last");
//    next();  // **** as next call so niche wale bhi chale gai -> next stores the address no next function
// },

app.use("/users",(req,res,next)=>{  
   console.log("first");  
   res.send("hello");      
   console.log("first last");
   next();  // **** as next call so niche wale bhi chale gai -> next stores the address no next function
},
(req,res,next)=>{               
    console.log("second");
   // res.send("hello i am second"); -> not work only 1 res.send
    console.log("second last");
    next();
},
(req,res)=>{
    console.log("third");
    //res.send("hello i am third"); -> not work only 1 res.send 
    console.log("third last");
}
) 




// predict output

app.use("/user1",(req,res,next)=>{  
   console.log("first");  
   res.send("hello");
   next();       
   console.log("first last"); 
},
(req,res,next)=>{               
    console.log("second");
    next();
    console.log("second last");
},
(req,res,next)=>{
    console.log("third");
    console.log("third last");
    // next();  // -> **** aage koi sa function ni hai so error ayega next handle ni kar payega
}
) 




// all functions/route handlers should wrap in a array


app.use("/user2",[(req,res,next)=>{  
   console.log("first");  
   res.send("hello");
   next();       
   console.log("first last"); 
},
(req,res,next)=>{               
    console.log("second");
    next();
    console.log("second last");
},
(req,res,next)=>{
    console.log("third");
    console.log("third last");
}]
)



// another way to write middleware -> individual individual middlewares -> bich wale is middlewares but last wala is not middleware it a request handler normal

app.use("/user3",(req,res,next)=>{   // middleware
   console.log("first");  
   res.send("hello");
   next();       
})

app.use("/user3",(req,res,next)=>{     // middleware          
    console.log("second");
    next();
})

app.use("/user3",(req,res)=>{   // route handler
    console.log("third");
})



// ******** middlewares -> is not offical term by express -> it is defined by developers only
// **** middleware is to solve repetitive task 

// use case -> i) **** req aye so log maintain karke rakhna hota hai -> koi bhi request ho get post put delete 
                  // log ko maintain karna req kab ayi res gaya and time kya tha req aane ka and all
             // ii) if log maintain ni kare and mere code pe kuch error hai and site crash so pata ni chalega na kis req ki wajah se crash ho gayi      
                // if histroy log maintain so pata chal jayega is req ki wajh se error aya hai and we slow that problem
            //  iii) bank pe logs maintain hote hai -> kisne kab paise nikale error kab kyu aya konsi req jyada use karray hai -> if data increase hora hai by any req so db increse kare and all
           //   iV) store this log data in fix memory -> excel any file and db pe etc
   //            v) **** for authentication use middlewares -> ki ye wahi user hai jo data maang ra hai -> authentication karo pehle -> so bar bar(get post delete and all) authenticate karne se acha hai middleware pe authentication ka code likh do toh kisi pe req ayegi (get,post,delete and all) so sabse pehle auth hoga in middleware then (get post delete and all) pe request jayegi


  // example -> normal way to do this  -> individual individaul        
//    app.get("/info",(req,res)=>{
//     console.log(`${Date.now()} ${req.method}`);
//     res.send("info");
//    })  
   
//     app.post("/info",(req,res)=>{
//     console.log(`${Date.now()} ${req.method}`);
//     res.send("info saved");
//    })   

//     app.delete("/info",(req,res)=>{
//     console.log(`${Date.now()} ${req.method}`);
//     res.send("info delete");
//    })   




// **** pro way -> create middleware -> and middleware se hi wo kaam ho jaye sirf middleware pe jo karana hai likh do 
// **** automatically work ho jayega in app.use then jispe req hogi wo work ho jayega tab
// **** agar ayse ni kare so sab mai same code likhna padega

  app.use("/info",(req,res,next)=>{
     console.log(`${Date.now()} ${req.method}`);
     next();
  })


   app.get("/info",(req,res,next)=>{
    res.send("info");
    next();
   })  
   
    app.post("/info",(req,res,next)=>{
    res.send("info saved");
    next();
   })   

    app.delete("/info",(req,res)=>{
    res.send("info delete");
   })   




app.listen(3000,()=>{
    console.log("listening on port 3000");
})