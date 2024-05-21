const mongoose = require('mongoose');

const otherimgSchema = mongoose.Schema({
    
    imgOther:{
    type:String
   }

})

module.exports = mongoose.model('otherImg',otherimgSchema);