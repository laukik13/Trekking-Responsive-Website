const express = require('express');

const upload = require('../ImageUploads/otherImgUpload');
const { addOther, getAllOther, deleteOther } = require('../Controller/otherImgController');

const router = express.Router();

router.route('/addOther').post(upload.single('imgOther'),addOther);
router.route('/getAllOther').get(getAllOther);
router.route('/deleteImageOther/:id').delete(deleteOther);

module.exports = router