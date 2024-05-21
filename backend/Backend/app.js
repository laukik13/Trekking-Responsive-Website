const express = require("express");
const cors = require('cors');
const cookieParser =require('cookie-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/avatar",express.static('Backend/Images/TestimonialImg'))
app.use("/trek",express.static('Backend/Images/TerkImg'))
app.use("/gallery",express.static('Backend/Images/Gallery/People'))
app.use("/gallery",express.static('Backend/Images/Gallery/Sight'))
app.use("/gallery",express.static('Backend/Images/Gallery/Trek'))
app.use("/gallery",express.static('Backend/Images/Gallery/Nature'))
app.use("/gallery",express.static('Backend/Images/Gallery/Refuge'))
app.use("/gallery",express.static('Backend/Images/Gallery/other'))

//import Route
const adminRoute = require('./Router/adminRoute')
const contactRoute = require('./Router/contactRoute');
const bookingRoute = require('./Router/bookingroute')
const testimonialRoute = require('./Router/testimonialRoute');
const trekRoute = require('./Router/trekRoute');
const peopleImgRoute = require('./Router/peopleImgRoute');
const sightImgRoute = require('./Router/sightImgRoute');
const trekImgRoute = require('./Router/trekImgRoute');
const natureImgRoute = require('./Router/natureImgRoute');
const refugeImgRoute = require('./Router/refugeImgRoute');
const otherImgRoute = require('./Router/otherImgRoute');
const videoRoute = require('./Router/videoRoute');
const subscribeRoute = require('./Router/subscribeRoute');

app.use('/admin',adminRoute);
app.use('/contact',contactRoute);
app.use('/booking',bookingRoute);
app.use('/testimonial',testimonialRoute);
app.use('/trek',trekRoute);
app.use('/gallery',peopleImgRoute);
app.use('/gallery',sightImgRoute);
app.use('/gallery',trekImgRoute);
app.use('/gallery',natureImgRoute);
app.use('/gallery',refugeImgRoute);
app.use('/gallery',otherImgRoute);
app.use('/video',videoRoute);
app.use('/subscribe',subscribeRoute);

//middleware
const errorMiddleware = require('./Middleware/error');

app.use(errorMiddleware);

module.exports = app;
