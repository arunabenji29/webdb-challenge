
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
        tbl.increments()
  
        tbl
        .string('actionName',128)
        .notNullable()
        .unique();
  
        tbl
        .text('actionDescription',500)
        .notNullable()
        .unique()
  
        tbl
        .boolean('actionFlag')
        .notNullable()

        tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropIfTableExists('actions')
  };
