const mongoose = require('mongoose');
const validator = require('validator');


const bookingSchema = mongoose.Schema({
    
    fullName:{
        type:String,
        require:[true,'Please Enter your Full Name']
    },
    email:{
        type:String,
        require:[true,'Please Enter your Email'],
        unique: true,
        validate:[validator.isEmail,'Please Enter a valid Email']
    },
    callingNo:{
        type:Number,
        require:[true,'Please Enter your Phone No'],
        maxLength:[10,'Please Enter Right Phone No']
    },
    whatsappNo:{
        type:Number,
        require:[true,'Please Enter your Whatsapp No'],
        maxLength:[10,'Please Enter Right Whatsapp No']
    },
    chooseTrek:{
        type:String,
        require:[true,'Please select your Trek']
    },
    date:{
        type:String,
        require:[true,'Please Enter Date']
    },
    address:{
        type:String,
        require:[true,'Please Enter your Address'],
        maxLength:[100,'Address should Have More than 3 character']
    },
    contactedFirasta:{
        type:String,
        require:[true,'Please Enter How you Contacted Firasta'],
        maxLength:[100,'Contacted Firasta should Have More than 3 character']
    },
    instagramId:{
        type:String,
        require:[true,'Please select your Instagram Id']
    },
    gaurdianName:{
        type:String,
        require:[true,'Please select your Gaurdian Name']
    },
    gaurdianNo:{
        type:String,
        require:[true,'Please select your Gaurdian No'],
        maxLength:[10,'Please Enter Right Whatsapp No']
    }
})


module.exports = mongoose.model("booking",bookingSchema);
