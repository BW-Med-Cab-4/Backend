exports.seed = function(knex) {
  return knex('recommendations').insert({userid: 1,strain: 'strain',location: '123 hello street, hellotown HE 12345',website: 'www.google.com'})
};
