const catchAsyncError = require('../Middleware/catchAsyncError');
const Other = require('../Models/otherImgModel');
const Errorhandler = require('../Utils/errorHandler');


exports.addOther = catchAsyncError(async(req,res,next)=>{
  
    if(req.file){
        var otherrecord = {
            
            imgOther: req.file.filename,
        }
    }
    else{
        var otherrecord = {

            imgOther: req.file.filename,
        }
    }

    const other = await Other.create(otherrecord);
  
    res.status(200).json({
      success: true,
      other
    })
  
  })
  
  //Get All Other Images
  
  exports.getAllOther = catchAsyncError(async(req,res,next)=>{
      
      const other = await Other.find();
     
      res.status(200).json({
         success: true,
         other
      })
     
     })
  

  //Delete Other Images
  
  exports.deleteOther = catchAsyncError(async(req,res,next)=>{
  
  const other = await Other.findByIdAndDelete(req.params.id);
  
  if(!other){
    return next( new Errorhandler("Image not Found",404));
  }
  
  res.status(200).json({
      success: true,
      message: "Image Deleted Successfully"
  })
  
  })