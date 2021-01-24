const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const requirelogin = require('../middlewares/requiredLogin')
require('../server/posts')
const Post = mongoose.model("Post")

router.post('/createpost', requirelogin, (req, res) => {
    console.log(req.body)
    const { title, body, pic } = req.body

    if (!title || !body || !pic)
        return res.json({ "err": "error !!!!" })

    const post = new Post({

        title: title,
        body: body,
        pic: pic,
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

router.get('/allposts', requirelogin, (req, res) => {

    Post.find().populate("postedby", "_id email").then((posts) => {
        if (posts)
            return res.json({ posts })

        return res.json({ "err": "err....!!!" })


    }).catch(err => {
        console.log(err)
    })
})


router.put('/like', requirelogin, (req, res) => {


    Post.findByIdAndUpdate(req.body.postId, {
        $push: { likes: req.user._id }
    }, {
        new: true,
    }).exec((err, result) => {
        if (err) {
            res.json({ "err": err })
        }
        else
            res.json({ result })
    })

})


router.put('/unlike', requirelogin, (req, res) => {
    Post.findByIdAndUpdate(req.body.postId, {
        $pull: { likes: req.user._id }
    }, {
        new: true,
    }).exec((err, result) => {
        if (err)
            res.json({ 'err': err })
        else
            res.json({ 'result': result })
    })
})


/*router.put('/comment', requirelogin, (req, res) => {
    const comment = {
        text: req.body.text,
        postedby: req.user._id
    }

    Post.findByIdAndUpdate(req.body.postId, {

        $push: { comments: comment }
    },
        { new: true }
    ).populate("comments.postedby", "_id name")
        .populate("postedby", "_id name")
        .exec((err, res) => {
            if (err)
                return res.json({ err })

            return res.json({ err })
        })

})*/

router.put('/comments', requirelogin, (req, res) => {
    const comment = {
        text: req.body.text,
        postedby: req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId, {
        $push: { comments: comment }
    }, {
        new: true
    })
        .populate("comments.postedby", "_id username")
        .populate("postedby", "_id username")
        .exec((err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            } else {


                res.json({ result })
            }
        })
})

module.exports = router