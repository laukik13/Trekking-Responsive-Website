const catchAsyncError = require('../Middleware/catchAsyncError');
const Video = require('../Models/videoModel');
const Errorhandler = require('../Utils/errorHandler');


exports.addVideoLink = catchAsyncError(async(req,res,next)=>{
  
    const video = await Video.create(req.body);
  
    res.status(200).json({
      success: true,
      video
    })
  
  })
  
  //Get All Video Images
  
  exports.getAllVideo = catchAsyncError(async(req,res,next)=>{
      
      const video = await Video.find();
     
      res.status(200).json({
         success: true,
         video
      })
     
     })
  

  //Delete Video Images
  
  exports.deleteVideo = catchAsyncError(async(req,res,next)=>{
  
  const video = await Video.findByIdAndDelete(req.params.id);
  
  if(!video){
    return next( new Errorhandler("Vedio Link not Found",404));
  }
  
  res.status(200).json({
      success: true,
      message: "Video Link Deleted Successfully"
  })
  
  })