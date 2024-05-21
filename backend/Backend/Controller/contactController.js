const catchAsyncError = require('../Middleware/catchAsyncError');
const Contact = require('../Models/contactModel');
const Errorhandler = require('../Utils/errorHandler');



exports.addContact = catchAsyncError(async(req,res,next)=>{
  
  const {fullName ,email,phone,message} = req.body;

  const contact = await Contact.create({fullName,email,phone,message})

  res.status(200).json({
    success: true,
    contact
  })

})

//Get All Contact List

exports.getAllContact = catchAsyncError(async(req,res,next)=>{
    
    const contact = await Contact.find();
   
    res.status(200).json({
       success: true,
       contact
    })
   
   })


//Update Contact

exports.updateContact =catchAsyncError(async(req,res,next)=>{

const contact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true,useFindAndModify:true,useValidators:true});

if(!contact){
    return next( new Errorhandler("Contact not Found",404));
}

res.status(200).json({
    success: true,
    contact
})

})

//Delete Contact

exports.deleteContact = catchAsyncError(async(req,res,next)=>{

const contact = await Contact.findByIdAndDelete(req.params.id);

if(!contact){
    return next( new Errorhandler("Contact not Found",404));
}

res.status(200).json({
    success: true,
    message: "Contact Deleted Successfully"
})

})