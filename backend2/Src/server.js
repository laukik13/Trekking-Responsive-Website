import connectDB from "./Database/db.js";
import { app } from "./app.js";
import dotenv from "dotenv";

//env config
dotenv.config({path:"./.env"});

//database config
connectDB().then(()=>{
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is Working On ${process.env.PORT}`);
      });
})
.catch((err)=>{
    console.log(err);
})



