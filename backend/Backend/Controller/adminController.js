const catchAsyncError = require('../Middleware/catchAsyncError');
const Admin = require('../Models/adminModel');
const Errorhandler = require('../Utils/errorHandler');
const SendToken = require('../Utils/jwtToken');



//register Admin 

exports.registerAdmin = catchAsyncError(async(req,res,next)=>{

 const {username,firstName,lastName,email,password} = req.body;


 const admin = await Admin.create({
    username,firstName,lastName,email,password
 })

 SendToken(admin,201,res);

})

//login Admin

exports.loginAdmin = catchAsyncError(async(req,res,next)=>{

const {username,password}= req.body;

if(!username || !password){
    return next(Errorhandler("Please Enter Your Email & Password",400));
}

const admin = await Admin.findOne({ username }).select("+password");

if(!admin){
    return next(Errorhandler("Invalid Email & Password",401));
}

const ispasswordMatch = await admin.comparePassword(password);

if(!ispasswordMatch){
    return next(Errorhandler("Invalid Email & Password",401));
}

SendToken(admin,200,res);

})

//logout Admin 

exports.logoutAdmin = catchAsyncError( async(req,res,next)=>{

   res.cookie("token",null,{
    expires: new Date(Date.now()),
    httpOnly: true
   })

   res.status(200).json({
    success: true,
    message: "Logged Out"
   })

})