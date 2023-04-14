const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'ERROR: MUST PROVIDE TASK'],
        trim:true,
        maxlength: [20, 'CAN NOT BE LONGER THAN 20 CHARS']
        
    },
    completed:{
        type: Boolean,
        default:false,
        
    },

})

module.exports = mongoose.model('Task', taskSchema)