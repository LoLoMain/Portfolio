const express = require('express');
const router  = express.Router();

/* GET About page. */
router.get('/about', (req, res, next) => {
  res.render('about.ejs');
});

module.exports = router;
