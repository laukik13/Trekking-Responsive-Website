const catchAsyncError = require('../Middleware/catchAsyncError');
const Nature = require('../Models/natureImgModel');
const Errorhandler = require('../Utils/errorHandler');


exports.addNature = catchAsyncError(async(req,res,next)=>{
  
    if(req.file){
        var naturerecord = {
            
            imgNature: req.file.filename,
        }
    }
    else{
        var naturerecord = {

            imgNature: req.file.filename,
        }
    }

    const nature = await Nature.create(naturerecord);
  
    res.status(200).json({
      success: true,
      nature
    })
  
  })
  
  //Get All Nature Images
  
  exports.getAllNature = catchAsyncError(async(req,res,next)=>{
      
      const nature = await Nature.find();
     
      res.status(200).json({
         success: true,
         nature
      })
     
     })
  

  //Delete Nature Images
  
  exports.deleteNature = catchAsyncError(async(req,res,next)=>{
  
  const nature = await Nature.findByIdAndDelete(req.params.id);
  
  if(!nature){
    return next( new Errorhandler("Image not Found",404));
  }
  
  res.status(200).json({
      success: true,
      message: "Image Deleted Successfully"
  })
  
  })