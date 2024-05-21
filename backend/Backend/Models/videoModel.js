const mongoose = require('mongoose');

const vedioLinkSchema = mongoose.Schema({
    
    videoLink:{
    type:String
   }

})

module.exports = mongoose.model('videoLink',vedioLinkSchema);