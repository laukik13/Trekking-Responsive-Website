const mongoose = require('mongoose');
const validator =require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const adminSchema = mongoose.Schema({

username:{
    type: String,
    require:[true,"Please Enter Your Username"],
    minLength:[8,"username should have more than 8 character"],
    unique: true
},
firstName:{
    type: String,
    require:[true,"Please Enter Your First Name"],
},
lastName:{
    type: String,
    require:[true,"Please Enter Your Last Name"],
},
email:{
type:String,
require:[true,'Please Enter Your Email'],
unique:true,
validate:[validator.isEmail,"Please Enter a valid Email"]
},
password:{
    type:String,
    require:[true,'Please Enter Your Password'],
    minLength:[6,'Password should have More than 6 Character'],
    select:false
},
resetPasswordToken:String,
resetPasswordExpire:Date,

})

//bcrypt password

adminSchema.pre('save',async function(next){

if(!this.isModified('password')){
    next()
}

this.password = await bcrypt.hash(this.password,10);

})

//jwt Token

adminSchema.methods.getJWTToken = function(){
    
    return jwt.sign({ id:this._id },process.env.JWT_SECRET ,{
        expiresIn: process.env.JWT_EXPIRE,
    })

}


//compare password 

adminSchema.methods.comparePassword =async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}





module.exports = mongoose.model('admin',adminSchema);