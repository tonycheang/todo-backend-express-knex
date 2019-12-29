
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