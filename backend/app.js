const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes/routes')

var app = express()

const url = "mongodb://***/todo"
const mongoDb = process.env.MONGODB_URL || url
mongoose.connect(mongoDb)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/todo', router)

var port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})