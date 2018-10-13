const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    task: {type: String, required: true, max: 140},
})

module.exports = mongoose.model('todo', todoSchema)