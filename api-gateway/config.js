/*
============================================
; Title:  alvarez-hello-world.js
; Author: Professor Krasso
; Date:   16 October 2020
; Modified by: Karina Alvarez
; Description: Global hub for application level
; configurations
;===========================================
*/

//Part I
var config = {};


config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;

//Part II
config.web.secret = 'topsecret';

module.exports = config;