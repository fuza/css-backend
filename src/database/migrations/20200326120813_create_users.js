
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();

        //table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('age').notNullable();
        table.string('gender').notNullable();
        table.string('password').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
