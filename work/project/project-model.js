const db = require('../../data/dbConfig.js')

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    update,
    remove
};

function getProjects() {
    console.log(db('projects'))
    return db('projects');
}

function getActions(id) {
    return db('actions')
        .where({ 'actions.project_id': id })
}

// async function getProjectById(id){

//    const project = await db('projects')
//     .where({id})
//     .first()

//     const actions = await getActions(id)

//     return {project,actions}
// }

function getProjectById(id) {
    return db('projects')
        .where({ id })
        .first()
        .then(project => {

            // return getActions(project.id)
            return db('actions')
                .where({ 'actions.project_id': project.id })
                .then(action => {
                    // console.log(action)
                    if (action) {
                        console.log('action inside if ',action)
                        project.action = action
                        console.log('project inside if ',project)
                        return project
                    }
                })
        })
}


function addProject(project) {
    return db('projects')
        .insert(project, 'id')
}

function update(id, changes) {
    return db('projects')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('projects')
        .where({ id })
        .del()
}