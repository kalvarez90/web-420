/*
============================================
; Title:  alvarez-hello-world.js
; Author: Professor Krasso
; Date:   22 October 2020
; Modified by: Karina Alvarez
; Description: 
;===========================================
*/

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
})

module.exports = mongoose.model('User', userSchema);