// **** using redis -> run this by -> node config/redis.js
// **** ensure karo ki pehle db se connect ho then user connect ho -> so redis.js pe call karray thay redis ko so wo yaha karo in index.js

const redis = require('redis');

const redisClient = redis.createClient({   // copy paste credentials from redisdb
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: process.env.REDIS_HOST,
        port: 11671
    }
});



// connection to redis -> but write this in index.js
// **** ensure karo ki pehle db se connect ho then user connect ho -> so redis.js pe call karray thay redis ko so wo yaha karo in index.js

// const connectReddis = async () => {
//    await redisClient.connect();
//    console.log("connected to redis");
// }

// connectReddis();


module.exports = redisClient;

