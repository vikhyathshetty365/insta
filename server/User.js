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

mongoose.model("User", userschema)

//module.exports.mongoose.model("User", userschema)