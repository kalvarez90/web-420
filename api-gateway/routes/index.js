/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Date:   22 October 2020
; Modified by: Karina Alvarez
; Description: 
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'API Gateway' 
  });
});

module.exports = router;
