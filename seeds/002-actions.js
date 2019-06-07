
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          "actionName": "action 1",
          "actionDescription": "action description 1",
          "actionFlag": 0,
          "project_id":1
      },
      {
        "actionName": "action 2",
        "actionDescription": "action description 2",
        "actionFlag": 0,
        "project_id":1
    },
    {
      "actionName": "action 3",
      "actionDescription": "action description 3",
      "actionFlag": 0,
      "project_id":2
  },
  {
    "actionName": "action 4",
    "actionDescription": "action description 4",
    "actionFlag": 0,
    "project_id":2
},
      ]);
    });
};
