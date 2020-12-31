var express = require('express')
var mongoose = require('mongoose')

const userschema = new mongoose.Schema({

    username: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }


})

var user = mongoose.model("User", userschema)
module.exports = user
//module.exports.mongoose.model("User", userschema)