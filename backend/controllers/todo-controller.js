const path = require('path')
const randomId = require('random-id')
const pathdir = path.dirname(path.parse(__filename).dir)
const Todo = require(path.join(pathdir, '/models/todo-model.js'))
const len = 10
const pattern = 'aA0'

exports.getAllTodo = (req, res) => {
    Todo.find({}, (err, todos) => {
        let todoMap = {}

        todos.forEach(todo => {
            todoMap[todo.id] = todo
        })

        res.send(todoMap)
    })
}

exports.getTodoById = (req, res) => {
     Todo.findById(req.params.id, (err, todo) => {
         if (err) {
             console.error(err)
         } else {
            res.send(todo)
         }
         
     })
}

exports.addTodo = (req, res) => {
    let todo = new Todo({
        task: req.body.todo,
    })

    todo.save((err) => {
        if(err){
            console.error(err)
        } else {
            res.send('Todo Added')
        }
        
    })
}

exports.deleteTodoById = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            console.error(err)
        } else {
            res.send('Todo Deleted')
        }
    })
}