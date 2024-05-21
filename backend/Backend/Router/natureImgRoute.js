const express = require('express');

const upload = require('../ImageUploads/natureImgUpload');
const { addNature, getAllNature, deleteNature } = require('../Controller/natureImgController');

const router = express.Router();

router.route('/addNature').post(upload.single('imgNature'),addNature);
router.route('/getAllNature').get(getAllNature);
router.route('/deleteImageNature/:id').delete(deleteNature);

module.exports = router