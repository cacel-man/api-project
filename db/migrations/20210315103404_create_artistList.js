
exports.up = function(knex) {
  return knex.schema.createTable('artists', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.string('countryOfOrigin').notNullable();
      table.string('famousSong').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('artist');
};


