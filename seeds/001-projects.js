
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          "projectName":"project 1",
          "projectDescription":"project description 1",
          "projectFlag":false
       },
       {
        "projectName":"project 2",
        "projectDescription":"project description 2",
        "projectFlag":false
     },
     {
      "projectName":"project 3",
      "projectDescription":"project description 3",
      "projectFlag":false
   },
      ]);
    });
};
