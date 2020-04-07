
exports.up = function(knex) {
    return knex.schema.createTable('contacts', function (table) {
        table.increments();

        table.timestamp('quando').notNullable();
        table.string('onde').notNullable();
        table.string('como').notNullable();

        table.integer('user_id').unsigned();

        table.foreign('user_id').references('users.id');

        table.timestamps();        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('contacts');
};