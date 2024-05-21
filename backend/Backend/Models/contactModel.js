const mongoose = require('mongoose');
const validator =require('validator');

const contactSchema = new mongoose.Schema({

    fullName:{
        type:String,
        required:[true,"Please Enter Your Full Name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique: true,
        validate:[validator.isEmail,"Please Enter a valid Email"]
    },
    phone:{
        type:Number,
        required:[true,"Please Enter Your Phone Number"],
        maxLength:[10,'Please Enter Right Mobile No'] 
    },
    message:{
        type:String,
        required:[true,"Please Enter Your Message"],
        maxLength:[100,'Message should Have More than 3 character'],
    }
    
})

module.exports = mongoose.model("contact",contactSchema);
