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

  // Save Contact Form Info
   newContact.save((err)=>{
     //DB Error
     if (err && newContact.errors === undefined){
       next(err);
       return;
     }
     // Valiation errors
      if(err && newContact.errors){
        //Variables with the error messages
        res.locals.nameValidationError = newContact.errors.contactName;
        res.locals.emailValidationError = newContact.errors.contactEmail;
        res.locals.messageValidationError = newContact.errors.contacMessage;
       //Display form to correct errors
        res.render('/contact');
        return;
      }
      //Save successful
      res.redirect('/');
   });
});

module.exports = router;
