const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

require('../server/User')
const User = mongoose.model("User")
router.get('/home', (req, res) => {
    res.send("hi")
})

router.post('/signup', (req, res) => {
    const user = req.body
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.json({ "err": "enter all details" })
    }
    bcrypt.hash(password, 14, (err, data) => {
        User.findOne({ email: email }).then((saveduser) => {
            if (saveduser)
                return res.json({ "err": " user already exists" })

            const userdetails = new User({
                username: username,
                email: email,
                password: password
            })

            userdetails.save().then((err, data) => {
                if (err)
                    return res.send({ "err": err })

                res.send(data)
            })
        })


    })

})

router.get('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password)
        res.json({ "error": "enter all details" })

    User.findOne({ "email": email }).then((user) => {
        if (user)
            return res.json({ "status": "logged in" })

        return res.json({ "status": "failed!!!" })



    }
    )
})



module.exports = router