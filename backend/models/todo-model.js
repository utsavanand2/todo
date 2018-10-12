const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    task: {type: String, required: true, max: 140},
    id: {type: String, required: true}
})

module.exports = mongoose.model('todo', todoSchema)