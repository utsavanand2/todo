const path = require('path')
const randomId = require('random-id')
const pathdir = path.dirname(path.parse(__filename).dir)
const Todo = require(path.join(pathdir, '/models/todo-model.js'))
const len = 10
const pattern = 'aA0'

exports.getAllTodo = (req, res) => {

}

exports.getTodoById = (req, res) => {
     
}

exports.addTodo = (req, res) => {
    let todo = new Todo({
        task: req.body.todo,
        id: randomId(len, pattern)
    })

    todo.save((err) => {
        if(err){
            return next(err)
        }
        res.send('Todo Added')
    })
}

exports.deleteTodoById = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            return next(err)
        }
        res.send('Todo Deleted')
    })
}