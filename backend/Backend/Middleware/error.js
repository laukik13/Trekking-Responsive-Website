const Errorhandler = require('../Utils/errorHandler');

module.exports  = (err,req,res,next)=>{
    err.statusCode =err.statusCode || 500;
    err.message =err.message||"Invalid Server Error";

    //Wrong MongoDB ID Error
    if(err.name === "CastError"){
        const message = `resource not found. Invalid: ${err.path}`;
        err = new Errorhandler(message,400)
    }

    //Mongoose duplicate key error
    if(err.code === 11000){
         const message  = `Duplicate ${Object.keys(err.keyValue)} Entered`
         err = new Errorhandler(message,400)
    }  

    res.status(200).json({
        success: false,
        message : err.message
    })
    
}


