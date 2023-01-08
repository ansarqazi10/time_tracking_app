const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    taskName: {type: String, required: true},
    invoice: {type: Number, required: true},
    projectId: {type: String, required: true},
    color: {type: String, required: true},
    time: {type: String, required: true},
    date: {type: String, required: true, default: Date.now()}
})

const Task = mongoose.model('Task', schema);

module.exports = Task;                                                              