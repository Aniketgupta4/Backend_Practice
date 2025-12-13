// **** khud se pura code likho for email and password or use inbuilt validator -> so download it -> npm i validator

const validator = require("validator")
function validateuser(data){
    const mandatoryField = ["firstName","emailId","age","password"]
    
    const IsAllowed = mandatoryField.every((k)=>Object.keys(data).includes(k))
    
    if(!IsAllowed)
        throw new Error("fields missing")

    // khud se pura code likho for email and password or use inbuilt validator -> so download it -> npm i validator
    if(!validator.isEmail(data.emailId)){
       throw new Error("invalid email")
    }

    if(!validator.isStrongPassword(data.password)){
        throw new Error("weak password")
    }

    if(!(data.firstName.length>=3 && data.firstName.length<=20)){
        throw new Error("Name shaould have 3 character and atmost 20")
    }

}

module.exports = validateuser;