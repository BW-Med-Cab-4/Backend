exports.seed = function(knex) {
    return knex('userinput').insert({userid: 1, ailment:'this is the new input style'})
};
