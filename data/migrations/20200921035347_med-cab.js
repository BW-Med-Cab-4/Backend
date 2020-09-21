exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl =>{
      tbl.increment('id').onDelete('RESTRICT').onUpate('RESTRICT');
      tbl.string('email').notNullable().unique();
      tbl.string('firstname').notNullable();
      tbl.string('lastname').notNullable();
      tbl.integer('phone').notNullable().unique();
  })
  .createTable('userInput', tbl =>{
      tbl.increment('id');
      tbl.integer('userid').references('roles.id').onDelete('RESTRICT').onUpate('RESTRICT');
      tbl.boolean('input1').defaultTo(0);
      tbl.boolean('input2').defaultTo(0);
      tbl.boolean('input3').defaultTo(0);
      tbl.boolean('input4').defaultTo(0);
      tbl.boolean('input5').defaultTo(0);
      tbl.boolean('input6').defaultTo(0);
  })
  .createTable('recommendations', tbl =>{
      tbl.increment('id');
      tbl.integer('userid').references('roles.id').onDelete('RESTRICT').onUpate('RESTRICT');
      tbl.string('strain').notNullable()
      tbl.string('location')
      tbl.string('website')
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recommendations').dropTableIfExists('userInput').dropTableIfExists('users')
};
