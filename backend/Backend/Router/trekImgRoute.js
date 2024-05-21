const express = require('express');
const upload = require('../ImageUploads/trekImgUpload');
const { addTrek, getAllTrek, deleteTrek } = require('../Controller/trekImgController');

const router = express.Router();

router.route('/addTrek').post(upload.single('imgTrek'),addTrek);
router.route('/getAllTrek').get(getAllTrek);
router.route('/deleteImageTrek/:id').delete(deleteTrek);

module.exports = router