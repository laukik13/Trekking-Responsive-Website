const catchAsyncError = require('../Middleware/catchAsyncError');
const Trek = require('../Models/trekModel');
const Errorhandler = require('../Utils/errorHandler');

exports.addNewTrek = catchAsyncError(async(req,res,next)=>{
  
    if(req.file){
        var trekrecord = {
            title: req.body.title,
            location: req.body.location,
            difficulty: req.body.difficulty,
            price: req.body.price,
            descp: req.body.descp,
            days: req.body.days,
            size: req.body.size,
            date: req.body.date,
            trekImg: req.file.filename,
        }
    }
    else{
        var trekrecord = {
            title: req.body.title,
            location: req.body.location,
            difficulty: req.body.difficulty,
            price: req.body.price,
            descp: req.body.descp,
            days: req.body.days,
            size: req.body.size,
            date: req.body.date,
        }
    }
  
    const trek = await Trek.create(trekrecord);
  
    res.status(200).json({
      success: true,
      trek
    })
  
  })
  
  //Get All Trek
  
  exports.getAllTrek = catchAsyncError(async(req,res,next)=>{
      
      const trek = await Trek.find();
     
      res.status(200).json({
         success: true,
         trek
      })
     
     })
  
  
  //Update Trek
  
  exports.updateTrek =catchAsyncError(async(req,res,next)=>{
  

    if(req.file){
        var trekrecord = {
            title: req.body.title,
            location: req.body.location,
            difficulty: req.body.difficulty,
            price: req.body.price,
            descp: req.body.descp,
            days: req.body.days,
            size: req.body.size,
            date: req.body.date,
            trekImg: req.file.filename,
        }
    }
    else{
        var trekrecord = {
            title: req.body.title,
            location: req.body.location,
            difficulty: req.body.difficulty,
            price: req.body.price,
            descp: req.body.descp,
            days: req.body.days,
            size: req.body.size,
            date: req.body.date,
        }
    }


  const trek = await Trek.findByIdAndUpdate(req.params.id,trekrecord,{new:true,useFindAndModify:true,useValidators:true});
  
  if(!Trek){
      return next( new Errorhandler("Trek not Found",404));
  }
  
  trek.avatar = `${req.file.filename}`

  await trek.save();

  res.status(200).json({
      success: true,
      trek
  })
  
  })
  
  //Delete Trek
  
  exports.deleteTrek = catchAsyncError(async(req,res,next)=>{
  
  const trek = await Trek.findByIdAndDelete(req.params.id);
  
  if(!trek){
      return next( new Errorhandler("Trek not Found",404));
  }
  
  res.status(200).json({
      success: true,
      message: "Trek Deleted Successfully"
  })
  
  })