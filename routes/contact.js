const express = require('express');
const router  = express.Router();

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact');
});

module.exports = router;
