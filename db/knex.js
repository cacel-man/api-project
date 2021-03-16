let enviroment = process.env.NODE_ENV || 'development';
let config = require('../knexfile.js')[enviroment];
module.exports = require('knex')(config);