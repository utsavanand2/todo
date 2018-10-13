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
            var response = {status: "Fail", data: "Null"}
            console.error(err)
            res.status(500)
            res.end(JSON.stringify(response))
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
             var response = {status: "Fail", data: "Null"}
             console.error(err)
             res.status(500)
             res.end(JSON.stringify(response))
         } else {
            var response = {status: "Success", data: todo}
            res.status(200)
            res.send(todo)
         }
         
     })
}

exports.addTodo = (req, res) => {
    let todo = new Todo({
        task: req.body.todo,
    })

    todo.save((err, todo) => {
        if(err){
            var response = {status: "Fail", data: "Null"}
            console.error(err)
            res.status(500)
            res.end(JSON.stringify(response))
        } else {
            var response = {status: "Success", data: todo}
            res.status(200)
            res.send(JSON.stringify(response))
        }
        
    })
}

exports.updateTodoById = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, 
        req.body.todo, 
        {new: true},
        
        (err, todo) => {
            if(err) {
                var response = {status: "Fail", data: "Null"}
                console.error(err)
                res.status(500)
                res.end("Could not update todo")
            } else {
                var response = {status: "Success", data: todo}
                res.status(200)
                res.send(JSON.stringify(response))
            }
        })
}

exports.deleteTodoById = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, todo) => {
        if(err, todo) {
            var response = {status: "Fail", data: "Null"}
            console.error(err)
            res.status(500)
            res.end(JSON.stringify(response))
        } else {
            var response = {status: "Success", data: todo}
            res.status(200)
            res.send(JSON.stringify(response))
        }
    })
}

exports.deleteAllTodos = (req, res) => {
    Todo.remove({}, (err, todo) => {
        if(err) {
            var response = {status: "Fail", data: "Null"}
            console.error(err)
            res.status(500)
            res.end(JSON.stringify(response))
        } else {
            var response = {status: "Success", data: todo}
            res.status(200)
            res.send(JSON.stringify(response))
        }
    })
}