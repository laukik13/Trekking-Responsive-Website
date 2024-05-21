const catchAsyncError = require('../Middleware/catchAsyncError');
const People = require('../Models/peopleImgModel');
const Errorhandler = require('../Utils/errorHandler');


exports.addPeople = catchAsyncError(async(req,res,next)=>{
  
    if(req.file){
        var peoplerecord = {
            
            imgPeople: req.file.filename,
        }
    }
    else{
        var peoplerecord = {

            imgPeople: req.file.filename,
        }
    }

    const people = await People.create(peoplerecord);
  
    res.status(200).json({
      success: true,
      people
    })
  
  })
  
  //Get All People Images
  
  exports.getAllPeople = catchAsyncError(async(req,res,next)=>{
      
      const people = await People.find();
     
      res.status(200).json({
         success: true,
         people
      })
     
     })
  

  //Delete People Images
  
  exports.deletePeople = catchAsyncError(async(req,res,next)=>{
  
  const people = await People.findByIdAndDelete(req.params.id);
  
  if(!people){
    return next( new Errorhandler("Image not Found",404));
  }
  
  res.status(200).json({
      success: true,
      message: "Image Deleted Successfully"
  })
  
  })