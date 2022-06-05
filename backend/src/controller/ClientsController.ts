import { Request, Response } from "express";
import knex from '../database';




export const ClientController = {
    async createClient(req: Request, res: Response) {
        try {
            const { nome, endereco, telefone, email } = req.body;
            const newClient = await knex('clients').insert({
                nome,
                endereco,
                telefone,
                email
            });

            return res.status(201).json(newClient);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    async updateClient(req: Request, res: Response) {
        try {
            const { nome, endereco, email, telefone } = req.body;
            const { id } = req.params
            const update = await knex('clients').update({
                nome,
                endereco,
                email,
                telefone
            })
                .where({ id });
            if (update == 0) {
                return res.status(404).json("Usuário não encontrado");
            }
            return res.status(201).json("Usuário atualizado");
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    async getClients(req: Request, res: Response) {
        try {
            const get = await knex('clients').select();
            return res.status(200).json(get);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    async getClientsById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const getById = await knex('clients')
            .select()
            .where({ id });
            return res.status(200).json(getById);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async deleteClient(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await knex('clients')
                .where({ id })
                .del();

            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}