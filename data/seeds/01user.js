const { getMaxListeners } = require("process")

exports.seed = function(knex) {
    return knex('users').insert({email: 'testemail@gmail.com', firstname:'michael', lastname:'hernandez', phone: 6096091234, password: 'testpass'})
};
