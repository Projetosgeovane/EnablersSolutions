/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  await knex('clients').insert([
    { nome: 'Mario', endereco: 'Rua da Bosque da Saúde de São Paulo', telefone: '11972371061', email: 'Mario@gmail.com.br'},
  ]);
};
