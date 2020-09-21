exports.seed = function(knex) {
    return knex('userinput').insert({input1: 0,input2: 0,input3: 0,input4: 0,input5: 0,input6: 0})
};
