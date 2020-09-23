exports.seed = function(knex) {
    return knex('userinput').insert({userid: 1, input:'this is the new input style'})
};
