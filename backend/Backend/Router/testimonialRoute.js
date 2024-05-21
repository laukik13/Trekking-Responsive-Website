const express = require('express');
const { addTestimonial, getAllTestimonial, updateTestimonial, deleteTestimonial } = require('../Controller/testimonialController');
const upload = require('../ImageUploads/fileUpload');

const router = express.Router();

router.route('/addTestimonial').post(upload.single('avatar'),addTestimonial);
router.route('/getAllTestimonial').get(getAllTestimonial);
router.route('/updateTestimonial/:id').put(upload.single('avatar'),updateTestimonial)
router.route('/deleteTestimonial/:id').delete(deleteTestimonial);

module.exports = router
