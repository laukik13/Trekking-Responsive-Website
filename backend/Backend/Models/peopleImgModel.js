const mongoose = require('mongoose');

const peopleimgSchema = mongoose.Schema({
    
    imgPeople:{
    type:String
   }

})

module.exports = mongoose.model('peopleImg',peopleimgSchema);