const express = require('express');
const router  = express.Router();

const ContactModel = require('../models/contact-model.js');

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact');
});

/*Receive Contact Info. */
router.post('/contact', (req, res, next)=>{
  const newContact = ContactModel({
    contactName: req.body.name,
    contactEmail: req.body.email,
    contactMessage: req.body.message
  });
});

module.exports = router;
