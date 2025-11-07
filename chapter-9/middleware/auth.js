const Auth = (req,res,next)=>{
   const token = "abcdef"
   const access = token === "abcdef" ? 1 : 0

   if(!access)
    res.status(403).send("no permission"); // permission ni hai so yahi se res send kardo

   next();
}

module.exports = {Auth,}