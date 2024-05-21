const catchAsyncError = require('../Middleware/catchAsyncError');
const Sight = require('../Models/sightImgModel');
const Errorhandler = require('../Utils/errorHandler');


exports.addSight = catchAsyncError(async(req,res,next)=>{
  
    if(req.file){
        var sightrecord = {
            
            imgSight: req.file.filename,
        }
    }
    else{
        var sightrecord = {

            imgSight: req.file.filename,
        }
    }

    const sight = await Sight.create(sightrecord);
  
    res.status(200).json({
      success: true,
      sight
    })
  
  })
  
  //Get All Sight Images
  
  exports.getAllSight = catchAsyncError(async(req,res,next)=>{
      
      const sight = await Sight.find();
     
      res.status(200).json({
         success: true,
         sight
      })
     
     })
  

  //Delete Sight Images
  
  exports.deleteSight = catchAsyncError(async(req,res,next)=>{
  
  const sight = await Sight.findByIdAndDelete(req.params.id);
  
  if(!sight){
    return next( new Errorhandler("Image not Found",404));
  }
  
  res.status(200).json({
      success: true,
      message: "Image Deleted Successfully"
  })
  
  })