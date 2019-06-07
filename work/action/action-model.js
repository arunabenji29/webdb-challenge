const db = require('../../data/dbConfig.js')

module.exports = {
    getActions,
    getActionById,
    addAction,
    update,
    remove
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

function update(id,changes){
    return db('actions')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('actions')
    .where({id})
    .del()
}