
exports.up = function(knex) {
    return knex.schema.createTable('todos', function(table) {
        table.increments('id');
        table.string('title');
        table.boolean('completed');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('todos');
};


/*
exports.up = function(knex) {
  return knex.schema
    .createTable('users', function (table) {
       table.increments('id');
       table.string('first_name', 255).notNullable();
       table.string('last_name', 255).notNullable();
    })
    .createTable('products', function (table) {
       table.increments('id');
       table.decimal('price').notNullable();
       table.string('name', 1000).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("products")
      .dropTable("users");
};

exports.up = function(db, callback) {
  var schema = {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    title: 'string',
    completed: 'boolean'
  };

  db.createTable('todos', schema, callback);
};

exports.down = function(db, callback) {
  db.dropTable('todos', callback);
};

*/