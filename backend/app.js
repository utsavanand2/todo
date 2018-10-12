const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes/routes')

let app = express()

const url = "mongodb://localhost:27017/todo"
const mongoDb = process.env.MONGODB_URL || url
mongoose.connect(mongoDb)
mongoose.Promise = global.Promise

let db = mongoose.connection
db.on('error', console.error.bind(console, "Error connecting to database: "))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/todo', router)

let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})