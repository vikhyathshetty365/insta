const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const requirelogin = require('../middlewares/requiredLogin')
require('../server/posts')
const Post = mongoose.model("Post")

router.post('/createpost', requirelogin, (req, res) => {
    console.log(req.body)
    const { title, body } = req.body

    if (!title || !body)
        return res.json({ "err": "error !!!!" })

    const post = new Post({

        title: title,
        body: body,
        postedby: req.user
    })

    post.save().then(data => {
        return res.json(data)


    }).catch(err => {
        return res.json(err)
    })

})


module.exports = router