const express = require('express')
const path = require('path')
const pathdir = path.dirname(path.parse(__filename).dir)
const todoController = require(path.join(pathdir, '/controllers/todo-controller.js'))

const router = express.Router()

router.get('/getTodo', todoController.getTodo)

module.exports = router