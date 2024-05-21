const catchAsyncError = require('../Middleware/catchAsyncError');
const Refuge = require('../Models/refugeImgModel');
const Errorhandler = require('../Utils/errorHandler');


exports.addRefuge = catchAsyncError(async(req,res,next)=>{
  
    if(req.file){
        var refugerecord = {
            
            imgRefuge: req.file.filename,
        }
    }
    else{
        var refugerecord = {

            imgRefuge: req.file.filename,
        }
    }

    const refuge = await Refuge.create(refugerecord);
  
    res.status(200).json({
      success: true,
      refuge
    })
  
  })
  
  //Get All Refuge Images
  
  exports.getAllRefuge = catchAsyncError(async(req,res,next)=>{
      
      const refuge = await Refuge.find();
     
      res.status(200).json({
         success: true,
         refuge
      })
     
     })
  

  //Delete Refuge Images
  
  exports.deleteRefuge = catchAsyncError(async(req,res,next)=>{
  
  const refuge = await Refuge.findByIdAndDelete(req.params.id);
  
  if(!refuge){
    return next( new Errorhandler("Image not Found",404));
  }
  
  res.status(200).json({
      success: true,
      message: "Image Deleted Successfully"
  })
  
  })