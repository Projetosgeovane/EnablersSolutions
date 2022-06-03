import { Request, Response } from "express";
import { usuarioService } from "../services";
import knex from '../database';




export const ClientController = {
    async createClient(req: Request, res: Response) {
        try {
            const { cpf, nome, endereco, cidade, cep, complemento, uf, telefone, email } = req.body;
            const newClient = await knex('clients').insert({
                cpf,
                nome,
                endereco,
                cidade,
                cep,
                complemento,
                uf,
                telefone,
                email
            });
            console.log(newClient);
            console.log('1');
            
            return res.status(201).json(newClient);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    async updateClient(req: Request, res: Response) {
        try {
            const { cpf, nome, endereco, cidade, cep, complemento, uf, email } = req.body;
            const { id } = req.params
            const update = await knex('clients').update({
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
            return res.status(201).json(update);
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

    async deleteClient(req: Request, res: Response) {
        try {
            const{ id } = req.params;

            const clientDeletado = await knex('clients')
            .where({id})
            .del();

            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}