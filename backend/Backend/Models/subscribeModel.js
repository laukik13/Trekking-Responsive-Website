const mongoose = require('mongoose');

const subscribeSchema = mongoose.Schema({
    
    email:{
    type:String,
    required:[true,"Please Enter Your Email"]
   }

})

module.exports = mongoose.model('subscribe',subscribeSchema);