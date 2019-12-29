
exports.up = function(knex) {
  return knex.schema.table('todos', function(table){
      table.integer('order');
  })
};

exports.down = function(knex) {
  return knex.schema.table('todos', function(table){
      table.dropColumn('order');
  })
};

/*

exports.up = function(db, callback) {
  db.addColumn('todos', 'order', { type: 'int' }, callback);
};

exports.down = function(db, callback) {
  db.removeColumn('todos', 'order', callback);
};

*/