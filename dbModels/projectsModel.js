// need to connect to db
const db = require('../data/connection.js');

module.exports = {
    findProjects,
    addProject,
    findResources,
    addResource,
    findTasks,
    addTask,
    findProjectById
}

function findProjects() {
    return db('projects');
}

function findProjectById(id) {
    return db('projects').where({id}).first()
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(ids => {
            const id = ids[0];
            return findProjectById(id)
        })
}

function findResources() {

}

function addResource(resource) {

}

function findTasks() {

}

function addTask(task) {

}