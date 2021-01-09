var express = require('express')
var mongoose = require('mongoose')

const app = express()
require('./User')
require('./posts')

const User = mongoose.model("User")

const url = "mongodb+srv://clonedb:Zer2WiEt4fPegGoG@cluster0.wm9jo.mongodb.net/instaClone?retryWrites=true&w=majority"




app.use(express.json())
app.use(require('../routes/auth'))
app.use(require('../routes/posts'))





mongoose.connect(url,
    {
        useNewUrlParser: "true",
        useUnifiedTopology: true,
    })



mongoose.connection.on("error", err => {
    console.log(err)
})


mongoose.connection.on("connected", (err, data) => {
    console.log("connected")
})











app.listen(5000, () => {
    console.log('running')
})
//

//mongodb+srv://clonedb:<password>@cluster0.wm9jo.mongodb.net/<dbname>?retryWrites=true&w=majority