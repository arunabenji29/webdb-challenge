const db = require('../../data/dbConfig.js')

module.exports = {
    getActions,
    getActionById,
    addAction,
    
    
};

function getActions(){
    console.log(db('actions'))
    return db('actions');
}

function getActionById(id){
    return db('actions')
    .where({id})
    .first();
}


function addAction(action){
    return db('actions')
    .insert(action,'id')
}