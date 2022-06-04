
exports.up = function (knex) {
    return knex.schema.createTable('clients', table => {
        table.increments('id')
        table.string('nome', 70)
        table.string('endereco', 70)
        table.string('telefone', 15)
        table.string('email', 70)

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('update_at').defaultTo(knex.fn.now())
    })
};


exports.down = function (knex) {
    return knex.schema.dropTable('clients');
};
