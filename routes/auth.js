const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { jwt_secret } = require('../keys')

console.log(jwt_secret)
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

    User.findOne({ email: email }).then((saveduser) => {
        if (saveduser)
            return res.json({ "err": "user already exists" })

        bcrypt.hash(password, 12).then((hashpass) => {


            const user = new User({
                username: username,
                email: email,
                password: hashpass



            })

            user.save().then((save) => {
                if (save)
                    return res.json({ "status": "saved!!" })

                return res.json({ "status": "failed!!!" })


            }).catch(err => {
                console.log(err)
            })
        })
    }).catch(err => {
        console.log(err)
    })


})

router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password)
        res.json({ "err": "enter all details" })

    User.findOne({ email: email }).then((user) => {

        if (!user)
            return res.json({ "err": "user not found" })

        bcrypt.compare(password, user.password).then(match => {

            if (match) {

                const token = jwt.sign({ _id: user._id }, jwt_secret)
                return res.json({ token })
            }
            else {
                return res.json({ "err": "token error!!!" })
            }
        }).catch((err) => {
            return res.json({ "err": err })
        })








    }
    )
})



module.exports = router