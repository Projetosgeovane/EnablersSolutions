/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {

  await knex('users').insert([
    { nome: 'Enablers', endereco: 'Rua da Vila', telefone: '11972371061', email: 'enablers@enablers.com.br', senha: '123456789'},

  ]);
};
