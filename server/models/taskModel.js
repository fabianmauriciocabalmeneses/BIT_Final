const mongoose = require ("mongoose");
const Schema = mongoose.Schema;



const taskSchema = new Schema(
    {
        taskName: {
        type: String, 
        required: true
    }, 
    taskStatus: {
        type: Boolean,   
        default: false      
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("task", taskSchema)



