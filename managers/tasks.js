let Task = require('../models/tasks');

const taskManager = {
    create: async data => { 
        let task = new Task({
            taskName: data.taskName,
            invoice: data.invoice,
            projectId: data.projectId,
            color: data.color,
            time: data.time,
            date: new Date(data.date)
        });
    
        task = await task.save();
        return task;
    },

    getAll: async () => {
        let tasks = await Task.find({});
        return tasks;
    },

    getOne: async (id) => {
        let task = await Task.findById(id);
        return task;
    },

    update: async (id, data) => {
        let task = await Task.findByIdAndUpdate(id, {
            taskName: data.taskName,
            invoice: data.invoice,
            projectId: data.projectId,
            color: data.color,
            time: data.time
        }, {
            new: true
        });
        return task;
    },

    delete: async (id) => {
        let task = await Task.findByIdAndDelete(id);
        return task;
    }
}

module.exports = taskManager;   