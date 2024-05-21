const mongoose = require('mongoose');

const trekimgSchema = mongoose.Schema({
    
    imgTrek:{
    type:String
   }

})

module.exports = mongoose.model('trekImg',trekimgSchema);