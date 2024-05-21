const mongoose = require('mongoose');

const refugeimgSchema = mongoose.Schema({
    
    imgRefuge:{
    type:String
   }

})

module.exports = mongoose.model('refugeImg',refugeimgSchema);