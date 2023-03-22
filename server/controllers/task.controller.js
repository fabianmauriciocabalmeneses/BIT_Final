const task = require('../models/taskModel.js')

const taskController = {}

// consultar tareas
taskController.getTasks = async (req, res) => {
    try{
        const tasks = await task.find()
        res.json(tasks)
    } catch (error) {
        return res.status(400).json({
            ok: false,
            message: error.message
        })
    }
    
}


// Consultar tarea
taskController.getTask =  async(req, res) => {
    const tasks = await task.find();
    res.json(tasks);
}

// Crear tareas

taskController.createTasks =  async (req, res) => {
    console.log(req.body)

    const tareas = new task(req,body)
    await tareas.save() 
    res.json({
        'status': 'Tarea guarda'
    })
    console.log(tareas);

    
}

// Obtener una tarea

taskController.getTask = async (req , res ) => {
    console.log(req.params.id);
    const tarea = await task.findById(req.params.id)
    res.json(tarea)

}

// Borrar tarea
taskController.deleteTasks = async (req, res) => {
     await task.findByIdAndRemove(req.params.id)
    res.json({status :'Tarea Eliminada'})
}

//actualizar tarea
taskController.updateTasks = async (req, res) => {
    const { id } = req.body
    const tarea = {
        taskName: req.body   

    } 
    await task.findByIdAndUpdate(id, {$set, tarea}, {new: true})
    res.json({status: 'actualizado'})
}


module.exports = taskController