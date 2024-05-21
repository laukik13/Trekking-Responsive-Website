const express = require('express');

const upload = require('../ImageUploads/sightImgUpload');
const { addSight, getAllSight, deleteSight } = require('../Controller/sightImgController');

const router = express.Router();

router.route('/addSight').post(upload.single('imgSight'),addSight);
router.route('/getAllSight').get(getAllSight);
router.route('/deleteImageSight/:id').delete(deleteSight);

module.exports = router