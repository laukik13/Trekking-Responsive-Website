const catchAsyncError = require('../Middleware/catchAsyncError');
const Booking = require('../Models/bookingModel');



exports.addBooking = catchAsyncError(async(req,res,next)=>{
  
    const {fullName,email,callingNo,whatsappNo,chooseTrek,date,address,contactedFirasta,instagramId,gaurdianName,gaurdianNo} = req.body;
  
    const booking = await Booking.create({fullName ,email, callingNo,whatsappNo,chooseTrek,date,address,contactedFirasta,instagramId,gaurdianName,gaurdianNo})
  
    res.status(200).json({
      success: true,
      booking
    })
  
  })
  
  //Get All Booking List
  
  exports.getAllBooking = catchAsyncError(async(req,res,next)=>{
      
      const booking= await Booking.find();
     
      res.status(200).json({
         success: true,
         booking
      })
     
     })
  
  
  //Update Booking
  
  exports.updateBooking =catchAsyncError(async(req,res,next)=>{
  
  const booking = await Booking.findByIdAndUpdate(req.params.id,req.body,{new:true,useFindAndModify:true,useValidators:true});
  
  if(!booking){
      return next( new Errorhandler("Booking not Found",404));
  }
  
  res.status(200).json({
      success: true,
      booking
  })
  
  })
  
  //Delete Booking
  
  exports.deleteBooking = catchAsyncError(async(req,res,next)=>{
  
  const booking = await Booking.findByIdAndDelete(req.params.id);
  
  if(!booking){
      return next( new Errorhandler("Booking not Found",404));
  }
  
  res.status(200).json({
      success: true,
      message: "Booking Deleted Successfully"
  })
  
  })