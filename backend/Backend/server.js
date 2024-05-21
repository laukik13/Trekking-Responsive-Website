const connectDatabase = require("./Config/database.js");
const app = require("./app.js");
const dotenv = require("dotenv");

//handling uncaught Exception
    process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("shutting down the server due to Unhandled Uncaught Exception");

    process.exit(1);

})



//Dotenv path
dotenv.config({path: "Backend/Config/config.env"});


//Database
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log("Server is Working");
});


//unhandle promise rejection

process.on("unhandledRejection",err =>{
    console.log(`Error : ${err.message}`);
    console.log("shutting down the server due to unhandle Promise Rejection")

    server.close(()=>{
        process.exit(1);
    })

})

