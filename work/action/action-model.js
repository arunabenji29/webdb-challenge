const db = require('../../data/dbConfig.js')

module.exports = {
    getActions,
    getActionsAndContextById,
    addAction,
    update,
    remove
};

function getActions() {
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

// async function getActionsAndContextById(id){

//    const action = await db('actions')
//    .where({id})
//     // .first();

//   const contexts = await getContexts(id)

//   return {action,contexts}

//  }

function getActionsAndContextById(id) {
    return db('actions')
        .where({ id })
        .first()
        .then(action => {

            return getContexts(action.id)

    //         return db('action-context')
    // .where({'action-context.action_id':action.id})
    // .join('contexts', 'contexts.id', '=', 'action-context.context_id')
    // .select('contexts.places')
                .then(context => {
                    // console.log(action)
                    if (action) {
                        console.log('context inside if ',context)
                        action.context = context
                        console.log('action inside if ',action)
                        return action
                    }
                })
        })
}


function addAction(action) {
    return db('actions')
        .insert(action, 'id')
}

function update(id, changes) {
    return db('actions')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('actions')
        .where({ id })
        .del()
}