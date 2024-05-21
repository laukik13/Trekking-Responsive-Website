const express = require('express');

const { addVideoLink, getAllVideo, deleteVideo } = require('../Controller/videoLinkController');

const router = express.Router();

router.route('/addVideo').post(addVideoLink);
router.route('/getAllVideo').get(getAllVideo);
router.route('/deleteVideo/:id').delete(deleteVideo);

module.exports = router