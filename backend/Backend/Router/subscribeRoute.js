const express = require('express');

const { addSubscribe } = require('../Controller/subscribeController');

const router = express.Router();

router.route('/addSubscriber').post(addSubscribe);


module.exports = router
