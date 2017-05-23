var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Games'
  });
});

router.get('/black_flag', function(req, res){
  res.render('about', {
    title: 'Black Flag'
  });
});

router.get('/skyrim', function(req, res){
  res.render('contact', {
    title: 'Skyrim'
  });
});

module.exports = router;

