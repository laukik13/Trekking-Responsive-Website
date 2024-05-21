const express = require('express');

const upload = require('../ImageUploads/refugeImgUpload');
const { addRefuge, getAllRefuge, deleteRefuge } = require('../Controller/refugeImgController');

const router = express.Router();

router.route('/addRefuge').post(upload.single('imgRefuge'),addRefuge);
router.route('/getAllRefuge').get(getAllRefuge);
router.route('/deleteImageRefuge/:id').delete(deleteRefuge);

module.exports = router