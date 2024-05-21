const catchAsyncError = require('../Middleware/catchAsyncError');
const Testimonial = require('../Models/testimonialModel');
const Errorhandler = require('../Utils/errorHandler');


exports.addTestimonial = catchAsyncError(async(req,res,next)=>{
  
    if(req.file){
        var testimonialrecord = {
            fullName: req.body.fullName,
            category: req.body.category,
            comment: req.body.comment,
            avatar: req.file.filename,
        }
    }
    else{
        var testimonialrecord = {
            fullName: req.body.fullName,
            category: req.body.category,
            comment: req.body.comment,
        }
    }
  
    const testimonial = await Testimonial.create(testimonialrecord);
  
    res.status(200).json({
      success: true,
      testimonial
    })
  
  })
  
  //Get All Testimonial
  
  exports.getAllTestimonial = catchAsyncError(async(req,res,next)=>{
      
      const testimonial = await Testimonial.find();
     
      res.status(200).json({
         success: true,
         testimonial
      })
     
     })
  
  
  //Update Testimonial
  
  exports.updateTestimonial =catchAsyncError(async(req,res,next)=>{
  

    if(req.file){
        var testimonialrecord = {
            fullName: req.body.fullName,
            category: req.body.category,
            comment: req.body.comment,
            avatar: req.file.filename,
        }
    }
    else{
        var testimonialrecord = {
            fullName: req.body.fullName,
            category: req.body.category,
            comment: req.body.comment,
        }
    }


  const testimonial = await Testimonial.findByIdAndUpdate(req.params.id,testimonialrecord,{new:true,useFindAndModify:true,useValidators:true});
  
  if(!testimonial){
      return next( new Errorhandler("Testimonial not Found",404));
  }
  
  testimonial.avatar = `${req.file.filename}`

  await testimonial.save();

  res.status(200).json({
      success: true,
      testimonial
  })
  
  })
  
  //Delete Testimonial
  
  exports.deleteTestimonial = catchAsyncError(async(req,res,next)=>{
  
  const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
  
  if(!testimonial){
      return next( new Errorhandler("Testimonial not Found",404));
  }
  
  res.status(200).json({
      success: true,
      message: "Testimonial Deleted Successfully"
  })
  
  })