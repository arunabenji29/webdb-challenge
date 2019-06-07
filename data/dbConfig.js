const knex = require('knex')
const knexconfig = require('../knexfile.js')

const db = knex(knexconfig.development)

module.exports = db