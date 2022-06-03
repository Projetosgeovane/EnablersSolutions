import { Request, Response } from "express";
import { usuarioService } from "../services";
import knex from '../database';
import bcrypt from "bcryptjs";




export const UsersController = {
    async createUser(req: Request, res: Response) {
        try {
            const { cpf, nome, endereco, cidade, cep, complemento, uf, email, senha } = req.body;
            const newSenha = bcrypt.hashSync(senha, 10);
            const newUser = await knex('users').insert({
                cpf,
                nome,
                endereco,
                cidade,
                cep,
                complemento,
                uf,
                email,
                senha: newSenha
            });
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    async updateUser(req: Request, res: Response) {
        try {
            const { cpf, nome, endereco, cidade, cep, complemento, uf, email } = req.body;
            const { id } = req.params
            const updateUser = await knex('users').update({
                cpf,
                nome,
                endereco,
                cidade,
                cep,
                complemento,
                uf,
                email
            })
                .where({ id });
            return res.status(201).json(updateUser);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    async getUsers(req: Request, res: Response) {
        try {
            const get = await knex('users').select();
            return res.status(200).json(get);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const deleteUser = await knex('users')
                .where({ id })
                .del();

            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}