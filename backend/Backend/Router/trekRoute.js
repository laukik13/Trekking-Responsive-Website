const express = require('express');
const { addNewTrek, getAllTrek, updateTrek, deleteTrek } = require('../Controller/trekController');
const upload = require('../ImageUploads/TrekUpload');

const router = express.Router();

router.route('/addTrek').post(upload.single('trekImg'),addNewTrek);
router.route('/getAllTrek').get(getAllTrek);
router.route('/updateTrek/:id').put(upload.single('trekImg'),updateTrek);
router.route('/deleteTrek/:id').delete(deleteTrek);

module.exports = router
