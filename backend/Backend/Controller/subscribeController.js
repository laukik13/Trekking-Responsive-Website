
const catchAsyncError = require('../Middleware/catchAsyncError');
const Subscriber = require('../Models/subscribeModel');
const Errorhandler = require('../Utils/errorHandler');
const sendEmail = require('../Utils/sendMail');


exports.addSubscribe = catchAsyncError( async(req,res,next)=>{
  
    const subscriber = await Subscriber.create(req.body);
 
    // if(!subscriber){
    //  return next(new Errorhandler("User Not Found",404));
    // }
 
//  const resetToken = user.getResetPasswordToken();
 
//  await user.save({ validateBeforeSave : false});
 
//  const resetPasswordUrl =`${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`
 
//  const otp = Math.floor(1000 + Math.random() * 9000);
 
 const  message = `Confirm your Subscription\n\n 
 Yes, I want to subscribe
 \n\n If you have Not requested this email then , please ignore it`;
 
 try{
 
     await sendEmail({
         email: subscriber.email,
         subject: `Confirm Your Subscription`,
         message,
     })
      
     res.status(200).json({
      success:true,
      message: `Email sent to ${subscriber.email} Successfully`,
     })
 }
 catch(error){
    //  user.resetPasswordToken =undefined;
    //  user.resetPasswordExpire = undefined;
     
    //  await user.save({ validateBeforeSave : false});
     return next(new Errorhandler(error.message,500));
 }
 
 
 })
 