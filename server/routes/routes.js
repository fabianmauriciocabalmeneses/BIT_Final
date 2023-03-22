const express = require('express') 
const taskController = require('../controllers/task.controller.js')


const router = express.Router()

// Routing

router.get('/get', taskController.getTasks )

router.post('/post', taskController.createTasks)

router.get('/:id', taskController.getTask)

router.delete('/:id',  taskController.deleteTasks)

router.put('/:id', taskController.updateTasks )


module.exports = router
