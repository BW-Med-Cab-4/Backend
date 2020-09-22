exports.seed = function(knex) {
    return knex('userinput').insert({userid: 1, effect: 'happy', ailment: 'insomnia', flavor: 'blueberry', type: 'unknown'})
};
