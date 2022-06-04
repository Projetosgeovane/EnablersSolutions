import secret from "../config/secret";
import knex from "../database";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

export const authController = {
    async login(req: Request, res: Response) {
        const { email, senha } = req.body;

        const loginUser = await knex('users')
            .where('email',email)
            .where('senha', senha)
            .select()
            .first()
            

        if (!loginUser) {
            return res.status(404).json('E-mail ou senha inválido, verifique e tente novamente');
        }

        console.log(loginUser);
        
        
        
        
        
        if (bcrypt.compareSync(senha, loginUser.senha)) {
            return res.status(401).json('Senha invalída');
        }


        const token = jwt.sign({
            id: loginUser.id,
            email: loginUser.email,
            senha: loginUser.senha
        },
            secret.key
        );
        return res.json(token);
    }
}



