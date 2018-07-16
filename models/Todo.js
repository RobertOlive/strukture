const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    time: {type: Date, required: true},
    task: {type: String, required: true},
    cost: {type: Number},
    location: {type: String}
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;