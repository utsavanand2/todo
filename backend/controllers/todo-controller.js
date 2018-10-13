const path = require('path')
const randomId = require('random-id')
const pathdir = path.dirname(path.parse(__filename).dir)
const Todo = require(path.join(pathdir, '/models/todo-model.js'))
const len = 10
const pattern = 'aA0'

exports.getAllTodos = (req, res) => {
    Todo.find({}, (err, todos) => {
        let todoMap = []

        if (err) {
            console.error(err)
            res.status(500)
            res.end("Could not get")
        }

        todos.forEach(todo => {
            todoMap.push(todo)
        })

        res.send(todoMap)
    })
}

exports.getTodoById = (req, res) => {
     Todo.findById(req.params.id, (err, todo) => {
         if (err) {
             console.error(err)
             res.status(500)
             res.end("Could not get todo")
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
            res.status(500)
            res.end("Could not add todo")
        } else {
            res.status(200)
            res.send('Todo Added')
        }
        
    })
}

exports.updateTodoById = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, 
        req.body.todo, 
        {new: true},
        
        (err, todo) => {
            if(err) {
                console.error(err)
                res.status(500)
                res.end("Could not update todo")
            } else {
                res.status(200)
                res.send(todo)
            }
        })
}

exports.deleteTodoById = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            console.error(err)
            res.status(500)
            res.end("Could not delete todo")
        } else {
            res.status(200)
            res.send('Todo Deleted')
        }
    })
}

exports.deleteAllTodos = (req, res) => {
    Todo.remove({}, (err) => {
        if(err) {
            console.error(err)
            res.status(500)
            res.end("Could not delete all todos")
        } else {
            res.status(200)
            res.send("All Todos deleted")
        }
    })
}