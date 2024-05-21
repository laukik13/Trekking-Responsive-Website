const mongoose = require('mongoose');

const treakSchema = mongoose.Schema({
    
   title:{
    type:String,
    required:[true,'Please Enter Trek Title']
   },
   location:{
    type:String,
    required:[true,'Please Enter Trek Location']
   },
   difficulty:{
    type:String,
    required:[true,'Please Enter Trek Difficulty']
   },
   price:{
    type:String,
    required:[true,'Please Enter Trek Price']
   },
   descp:{
    type:String,
    required:[true,'Please Enter Trek Description']
   },
   days:{
    type:String,
    required:[true,'Please Enter Trek Total Days']
   },
   size:{
    type:String,
    required:[true,'Please Enter Trek Group Size']
   },
   date:{
    type:String,
    required:[true,'Please Enter Trek Date']
   },
   trekImg:{
    type:String,
    default:'trekImg_1699440667705.png'
   }
})

module.exports = mongoose.model('trek',treakSchema);