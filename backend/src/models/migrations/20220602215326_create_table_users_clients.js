
exports.up = function (knex) {
    return knex.schema.createTable('users_clients', table => { 
        table.integer("users_id").unsigned()
        table
            .foreign('users_id')
            .references('id')
            .inTable('users');
        table.integer("clients_id").unsigned()
        table
            .foreign('clients_id')
            .references('id')
            .inTable('clients');
    })
}


exports.down = function (knex) {
    return knex.schema.dropTable('users_clients');
};
