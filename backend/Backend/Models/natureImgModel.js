const mongoose = require('mongoose');

const natureimgSchema = mongoose.Schema({
    
    imgNature:{
    type:String
   }

})

module.exports = mongoose.model('natureImg',natureimgSchema);