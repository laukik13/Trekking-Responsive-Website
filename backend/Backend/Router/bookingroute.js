const express = require('express');
const { addBooking, getAllBooking, updateBooking, deleteBooking } = require('../Controller/bookingController');

const router= express.Router();

router.route('/addBooking').post(addBooking);
router.route('/getAllBooking').get(getAllBooking);
router.route('/updateBooking/:id').put(updateBooking)
router.route('/deleteBooking/:id').delete(deleteBooking);

module.exports = router