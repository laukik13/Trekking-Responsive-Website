const express = require('express');
const { addPeople, getAllPeople, deletePeople } = require('../Controller/peopleImgController');
const upload = require('../ImageUploads/peopleImgUpload')

const router = express.Router();

router.route('/addPeople').post(upload.single('imgPeople'),addPeople);
router.route('/getAllPeople').get(getAllPeople);
router.route('/deleteImagePeople/:id').delete(deletePeople);

module.exports = router