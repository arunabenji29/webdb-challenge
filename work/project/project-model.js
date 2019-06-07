const db = require('../../data/dbConfig.js')

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    
    
};

function getProjects(){
    console.log(db('projects'))
    return db('projects');
}

function getActions(id){
    return db('actions')
    .where({'actions.project_id':id})
}

async function getProjectById(id){

   const project = await db('projects')
    .where({id})
    .first()

    const actions = await getActions(id)

    return {project,actions}
}


function addProject(project){
    return db('projects')
    .insert(project,'id')
}