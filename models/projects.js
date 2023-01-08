const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    projectName: {type: String, required: true},
    color: {type: String, required: true},
    date: {type: String, required: true, default: Date.now()},
})

const Project = mongoose.model('Project', schema);

module.exports = Project;                                                              