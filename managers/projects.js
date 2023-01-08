let Projects = require('../models/projects');

const ProjectManager = {
    create: async data => { 
        let project = new Projects({
            projectName: data.projectName,
            color: data.color,
            date: new Date(data.date)
        });
    
        project = await project.save();
        return project;
    },

    getAll: async () => {
        let projects = await Projects.find({});
        return projects;
    },

    getOne: async (id) => {
        let project = await Projects.findById(id);
        return project;
    },

    update: async (id, data) => {
        let project = await Projects.findByIdAndUpdate(id, {
            projectName: data.projectName,
            color: data.color,
        }, {
            new: true
        });
        return project;
    },

    delete: async (id) => {
        let project = await Projects.findByIdAndDelete(id);
        return project;
    }
}

module.exports = ProjectManager;   