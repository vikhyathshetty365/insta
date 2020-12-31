var express = require('express')
var mongoose = require('mongoose')
var User = require('./User')
const url = "mongodb+srv://clonedb:Zer2WiEt4fPegGoG@cluster0.wm9jo.mongodb.net/instaClone?retryWrites=true&w=majority"
const app = express()

app.use(express.json())

mongoose.connect(url, {
    useNewUrlParser: "true",
    useUnifiedTopology: true,
})

mongoose.connection.on("error", err => {
    console.log(err)
})


mongoose.connection.on("connected", (err, data) => {
    console.log("connected")
})

app.post('/signin', (req, res) => {

    const user = req.body
    User.findOne({ email: user.email }).then((err, result) => {
        if (result)
            return res.json({ "error": "email exists" })
        else {
            const userdetails = new User({
                username: username,
                email: email,
                password: password


            });
            userdetails.save()
        }
    })


})


app.get('/', (req, res) => {
    res.status(200).send("hello")
})






app.listen(5000, () => {
    console.log('running')
})
//

//mongodb+srv://clonedb:<password>@cluster0.wm9jo.mongodb.net/<dbname>?retryWrites=true&w=majority