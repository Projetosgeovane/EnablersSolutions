
exports.up = function (knex) {
    return knex.schema
        .createTable('users', table => {
            table.increments('id')
            table.integer('cpf', 14).unique()
            table.string('nome', 70)
            table.string('endereco', 70)
            table.string('cidade', 70)
            table.integer('cep', 9)
            table.string('complemento', 70)
            table.string('uf', 2)
            table.string('telefone', 15)
            table.string('email', 70)
            table.string('senha')

            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('update_at').defaultTo(knex.fn.now())

        })

};


exports.down = function (knex) {
    return knex.schema.dropTable('users');
};




