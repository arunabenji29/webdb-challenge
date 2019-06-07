
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){
        tbl.increments()
  
        tbl
        .string('projectName',128)
        .notNullable()
        .unique();
  
        tbl
        .text('projectDescription',500)
        .notNullable()
        .unique()
  
        tbl
        .boolean('projectFlag')
        .notNullable()
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropIfTableExists('projects')
  };
