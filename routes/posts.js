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


router.get('/mypost', requirelogin, (req, res) => {

    Post.find({ postedby: req.header._id }).then((rec) => {

        if (!rec) return res.json({ "err": "no rec found" })

        return res.json({ rec })

    })



})

router.get('/allposts', (req, res) => {

    Post.find().populate("postedby", "_id email").then((posts) => {
        if (posts)
            return res.json({ posts })

        return res.json({ "err": "err....!!!" })


    }).catch(err => {
        console.log(err)
    })
})


module.exports = router