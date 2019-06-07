exports.up = function(knex, Promise) {
    return knex.schema.createTable('action-context', function(tbl){
        tbl.increments()
  

        tbl
        .integer('action_id')
        .unsigned()
        .references('id')
        .inTable('actions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl
        .integer('context_id')
        .unsigned()
        .references('id')
        .inTable('contexts')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropIfTableExists('action-context')
  };

