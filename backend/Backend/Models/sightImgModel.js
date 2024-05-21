const mongoose = require('mongoose');

const sightimgSchema = mongoose.Schema({
    
    imgSight:{
    type:String
   }

})

module.exports = mongoose.model('sightImg',sightimgSchema);