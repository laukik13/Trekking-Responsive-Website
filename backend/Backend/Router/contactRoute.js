const express = require('express');
const { addContact, getAllContact, deleteContact, updateContact} = require('../Controller/contactController');

const router =express.Router();


router.route('/addContact').post(addContact);
router.route('/getAllContact').get(getAllContact);
router.route('/updateContact/:id').put(updateContact)
router.route('/deleteContact/:id').delete(deleteContact);


module.exports = router;