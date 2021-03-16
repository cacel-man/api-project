
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([
        {id: 1,name: 'Travis Scott', countryOfOrigin: 'USA', famousSong: 'STARGAZING'},
        {id: 2,name: 'Kendrick Lamar', countryOfOrigin: 'USA', famousSong: 'HUMBLE.'},
        {id: 3,name: 'Childish Gambino', countryOfOrigin: 'USA', famousSong: 'Red Bone'}
      ]);
    });
};
