exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl =>{
      tbl.increments('id');
      tbl.string('email').notNullable().unique();
      tbl.string('firstname').notNullable();
      tbl.string('lastname').notNullable();
      tbl.integer('phone').notNullable().unique();
  })
  .createTable('userinput', tbl =>{
      tbl.increments('id');
      tbl.integer('userid').unsigned().references('users.id');
      tbl.boolean('input1').defaultTo(0);
      tbl.boolean('input2').defaultTo(0);
      tbl.boolean('input3').defaultTo(0);
      tbl.boolean('input4').defaultTo(0);
      tbl.boolean('input5').defaultTo(0);
      tbl.boolean('input6').defaultTo(0);
  })
  .createTable('recommendations', tbl =>{
      tbl.increments('id');
      tbl.integer('userid').unsigned().references('users.id');
      tbl.string('strain').notNullable()
      tbl.string('location')
      tbl.string('website')
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recommendations').dropTableIfExists('userInput').dropTableIfExists('users')
};
