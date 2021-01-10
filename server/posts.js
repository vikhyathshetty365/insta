const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const PostSchema = new mongoose.Schema({

    title:
    {
        type: String,
        required: true
    },

    body:
    {
        type: String,
        required: true
    },

    pic:
    {
        type: String,
        required: true
    },

    postedby:
    {
        type: ObjectId,
        ref: "User"
    }


})

mongoose.model("Post", PostSchema)