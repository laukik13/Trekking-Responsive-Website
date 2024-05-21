const Admin = require('../Models/adminModel');
const Errorhandler = require('../Utils/errorHandler');
const catchAsyncError = require('./catchAsyncError');
const jwt = require('jsonwebtoken');


exports.isAuthenticationAdmin = catchAsyncError(async(req,res,next)=>{

  const {token} =req.cookies;

  if(!token){
    return next( new Errorhandler("please Login To access this resource",401));
  }

  const decodedDate = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await Admin.findById(decodedDate.id);

    next();

})