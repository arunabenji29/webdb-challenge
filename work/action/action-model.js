const db = require('../../data/dbConfig.js')

module.exports = {
    getActions,
    getActionsAndContextById,
    addAction,
    update,
    remove
};

function getActions(){
    console.log(db('actions'))
    return db('actions');
}

// function getActionById(id){
//     return db('actions')
//     .where({id})
//     .first();
// }

function getContexts(id){
    return db('action-context')
    .where({'action-context.action_id':id})
    .join('contexts', 'contexts.id', '=', 'action-context.context_id')
    .select('contexts.places')
}

async function getActionsAndContextById(id){

   const action = await db('actions')
   .where({id})
    .first();

  const contexts = await getContexts(id)

  return {action,contexts}
     
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