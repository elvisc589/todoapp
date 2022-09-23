//import mongoose to create new Schema
const mongoose = require('mongoose');

//create Schema
const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true
    }
})

//export this Schema
const todo = mongoose.model('todo', TodoItemSchema);
module.exports = todo;
