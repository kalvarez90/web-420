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

var User = module.exports = mongoose.model('User', userSchema);

//user .save is used to add a new user in the database
module.exports.add = (user, callback) => {
    user.save(callback);
}

//getById
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query,callback);
};