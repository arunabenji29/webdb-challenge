
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        { places: 'work'},
        { places: 'home'},
        { places: 'computer'},
        { places: 'online'},
        { places: 'in-person'},
      ]);
    });
};
