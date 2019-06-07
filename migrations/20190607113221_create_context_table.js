

exports.up = function(knex, Promise) {
    return knex.schema.createTable('contexts', function(tbl){
        tbl.increments()
  
        tbl
        .string('places',128)
        .notNullable()
        .unique();

    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropIfTableExists('contexts')
  };