var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var country = require('../models/country.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  country.find(function (err, countries) {
    if (err) return next(err);
    res.json(countries);
  });
});

router.post('/', function(req, res, next) {
  country.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  country.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  country.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  country.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
