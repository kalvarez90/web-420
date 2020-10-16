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

var config = {};
config.web = {};
config.web.port = process.env.PORT || '8000';
module.exports = config;