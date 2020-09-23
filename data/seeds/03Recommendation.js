exports.seed = function(knex) {
  return knex('recommendations').insert({userid: 1,strain: 'strain',description: 'this is a description', rating: 10, effect:'chill AF', flavor: 'dragon fruit'})
};
