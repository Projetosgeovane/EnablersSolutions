import secret from "../config/secret";
import knex from "../database";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const authController = {
    async login(req: Request, res: Response) {
        const { email, senha } = req.body;

        const user = await knex('users')
            .where('email', email)
            .where('senha', senha)
            .select()
            .first()


        if (!user) {
            return res.status(404).json('E-mail ou senha inválido, verifique e tente novamente');
        }

        
        const { id } = user
       

        return res.json({
            user: {
                id,
                email
            },
            token: jwt.sign({ id }, secret.key, {
                expiresIn: secret.expiresIn,
            })
        });
    }
}



