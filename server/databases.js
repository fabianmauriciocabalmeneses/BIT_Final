const mongoose = require('mongoose')


let db

mongoose.connect(
    "mongodb+srv://fmcabalm:DqtkWYGtWMV8SB7e@cluster0.r7uuvfj.mongodb.net/task_aplication?retryWrites=true&w=majority"
 )
 .then(() => {
    console.log('connect to Mongo Atlas')
    db = mongoose.connection.db
    
 })

module.exports = mongoose