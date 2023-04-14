const express = require('express')
const router = express.Router()

const { getAllTasks,
        createTask,
        getTask,
        deleteTask,
        updateTask,
            } = require('../controllers/taskControllers')



router.route('/').get(getAllTasks)


module.exports = router