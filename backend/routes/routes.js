const express = require('express')
const path = require('path')
const pathdir = path.dirname(path.parse(__filename).dir)
const todoController = require(path.join(pathdir, '/controllers/todo-controller.js'))

const router = express.Router()

router.get('/getAllTodos', todoController.getAllTodos)
router.get('/getTodoByID/:id', todoController.getTodoById)
router.put('/addTodo', todoController.addTodo)
router.put('/updateTodoById/:id', todoController.updateTodoById)
router.delete('/deleteTodoById/:id', todoController.deleteTodoById)
router.delete('/deleteAllTodos', todoController.deleteAllTodos)

module.exports = router