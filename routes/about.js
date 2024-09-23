var express = require('express');
var router = express.Router();

/* GET home page. https://www.youtube.com/watch?v=SnncAvMYxgY */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;