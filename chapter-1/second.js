// older method to import and export -> require and module.exports

console.log("second")

function sum(a,b){
    console.log(a+b)
}

//sum(2,3)

// single export karo
//module.exports = sum

function sub(a,b){
    console.log(a-b)
}

console.log(module.exports) // -> an empty object {}

// multiple export karo functions -> as object

module.exports = { sum, sub }

// or 

// as a value export karo

// module.exports.sum = sum
// module.exports.sub = sub