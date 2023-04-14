const express = require('express')
const app = express()
const taskRoutes = require('./routes/taskRoutes')
const connectDB = require('./db/connect')
require('dotenv').config()
const port = 3000

//middleware
app.use(express.json())
app.use('/api/v1/tasks', taskRoutes)

app.get('/sup', (req,res) => {
    res.send('Its the task manager app, boiiiii')
})

const start = async () => {
    try {
        await connectDB('mongodb+srv://valexdelgado:farts@cluster0.tziwtij.mongodb.net/taskManager?retryWrites=true&w=majority')
        app.listen(port, console.log(`RUNNING ON PORT: ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
