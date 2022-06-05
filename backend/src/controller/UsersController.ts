import { Request, Response } from "express";
import knex from '../database';






export const UsersController = {
    async createUser(req: Request, res: Response) {
        try {
            const { nome, endereco, email, telefone, senha } = req.body;
            const [newUser] = await knex('users').insert({
                nome,
                endereco,
                email,
                telefone,
                senha
            })

            return res.status(201).json(newUser)
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    async updateUser(req: Request, res: Response) {
        try {
            const { nome, endereco, email, telefone } = req.body;
            const { id } = req.params
            const updateUser = await knex('users').update({
                nome,
                endereco,
                telefone,
                email
            })
                .where({ id });
            if (updateUser == 0) {
                return res.status(404).json("Usuário não encontrado");
            }
            return res.status(201).json("Usuário atualizado");

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

    async getUsersById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const getById = await knex('users')
                .select()
                .where({ id });

            return res.status(200).json(getById);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await knex('users')
                .where({ id })
                .del();

            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
}