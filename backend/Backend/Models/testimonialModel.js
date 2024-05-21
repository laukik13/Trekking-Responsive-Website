const mongoose = require('mongoose');

const testimonialSchema = mongoose.Schema({

    fullName:{
        type:String,
        require:[true,'Please Enter your Full Name']
    },
    category:{
        type:String,
        require:[true,'Please Enter your Category']
    },
    comment:{
        type:String,
        require:[true,'Please Enter your Comments'],
        maxLength:[100,'Comment should Have More than 3 character']
    },
    avatar:{
        type:String,
        default:'avatar_1699438862530.jpg'
    }

})

module.exports = mongoose.model('testimonial',testimonialSchema);