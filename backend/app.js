const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes/routes')

let app = express()

const url = "mongodb://mongo:27017/local"
const mongoDb = process.env.MONGODB_URL || url
mongoose.connect(mongoDb, { useNewUrlParser: true })
mongoose.Promise = global.Promise

let db = mongoose.connection
db.on('error', console.error.bind(console, "Error connecting to database: "))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/todo', router)

let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})