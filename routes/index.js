/*
 * File name: index.ejs
 * Author's name: Emma Hilborn
 * Website name: http://emmavhilborn.azurewebsites.net/
 * Description: This is the file that contains the express routes for all my views
 /*

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Emma Hilborn' });
});

module.exports = router;

//Get about page
router.get('/about', function (req, res, next) {
    res.render('about');
});
module.exports = router;

//Get products page
router.get('/projects', function (req, res, next) {
    res.render('projects');
});
module.exports = router;

//Get services page
router.get('/services', function (req, res, next) {
    res.render('services');
});
module.exports = router;

//Get contact page
router.get('/contact', function (req, res, next) {
    res.render('contact');
});
module.exports = router;




