const Task = require('../models/taskModels')

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error){
        res.status(500).json({msg:error})

    }


}

const createTask =  async (req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})

    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getTask = async (req, res) => {
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg: 'TASK NOT FOUND'})
        }
        
        
        
        res.status(200).json(task)
        
        
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
    
}

const deleteTask = ((req, res) => {
    res.send('delete a task')
})
const updateTask = ((req, res) => {
    res.send('update a task ')
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
