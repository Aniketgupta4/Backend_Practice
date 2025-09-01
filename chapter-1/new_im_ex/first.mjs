// ** new import export not work why ? 

// ** by default node js support use cjs format -> not follow import export 
// ** use cjs: common js module require and module.exports use karta hai 

// ***** or .js ki space pe .mjs use karo -> work karega phir
// code work karega by .mjs extension se 
// **** react pe bundler tha toh .js se chal ra tha import export pe 
// so yaha extension dena padta hai in js 


// or another solution 

// **** package.json banao and "type":"module" -> kardo so .mjs ni likhna padega ab direct run hoga
// (latest) "type":"module" -> so import export use
// (oldest) "type":"commonjs" -> so use require and module.exports

import sum from "./second.mjs";

sum(2,3);