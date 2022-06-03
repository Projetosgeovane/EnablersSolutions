
exports.up = function (knex) {
    return knex.schema.createTable('clients', table => {
        table.increments('id')
        table.integer('cpf').unique()
        table.string('nome')
        table.string('endereco')
        table.string('cidade')
        table.integer('cep')
        table.string('complemento')
        table.string('uf')
        table.string('telefone')
        table.string('email')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('update_at').defaultTo(knex.fn.now())
    })
};


exports.down = function (knex) {
    return knex.schema.dropTable('clients');
};
