exports.up = function(knex) {
    return knex.schema
 
    .createTable('users', tbl =>{
        tbl.increments();
        tbl.string('email').notNullable().unique();
        tbl.string('firstname').notNullable();
        tbl.string('lastname').notNullable();
        tbl.integer('phone').notNullable().unique();
        tbl.string('password').notNullable();
    })
    .createTable('userinput', tbl =>{
        tbl.increments();
        tbl.integer('userid').unsigned().references('users.id');
        tbl.string('effect')
        tbl.string('ailment')
        tbl.string('flavor')
        tbl.string('type')
    })
    .createTable('recommendations', tbl =>{
        tbl.increments();
        tbl.integer('userid').unsigned().references('users.id');
        tbl.string('strain').notNullable()
        tbl.string('description')
        tbl.integer('rating')
    })
  
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recommendations')
        .dropTableIfExists('userInput')
        .dropTableIfExists('users')
  };
  