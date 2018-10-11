const path = require('path')
const pathdir = path.dirname(path.parse(__filename).dir)
const todoController = require(path.join(pathdir, '/models/todo-model.js'))

exports.getTodo = (req, res) => {
    res.send("Todo")
}