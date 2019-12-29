
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