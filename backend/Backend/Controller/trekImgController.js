const catchAsyncError = require('../Middleware/catchAsyncError');
const Trek = require('../Models/trekImgModel');
const Errorhandler = require('../Utils/errorHandler');


exports.addTrek = catchAsyncError(async(req,res,next)=>{
  
    if(req.file){
        var trekrecord = {
            
            imgTrek: req.file.filename,
        }
    }
    else{
        var trekrecord = {

            imgTrek: req.file.filename,
        }
    }

    const trek = await Trek.create(trekrecord);
  
    res.status(200).json({
      success: true,
      trek
    })
  
  })
  
  //Get All Trek Images
  
  exports.getAllTrek = catchAsyncError(async(req,res,next)=>{
      
      const trek = await Trek.find();
     
      res.status(200).json({
         success: true,
         trek
      })
     
     })
  

  //Delete Trek Images
  
  exports.deleteTrek = catchAsyncError(async(req,res,next)=>{
  
  const trek = await Trek.findByIdAndDelete(req.params.id);
  
  if(!trek){
      return next( new Errorhandler("Image not Found",404));
  }
  
  res.status(200).json({
      success: true,
      message: "Image Deleted Successfully"
  })
  
  })