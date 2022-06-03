import secret from "../config/secret";
import knex from "../database";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

export const authController = {
    async login(req: Request, res: Response) {
        const { email, senha } = req.body;

        const loginUser = await knex('users')
            .where('email', email)
            .select()
            .first()

        if (!loginUser) {
            return res.status(404).json('Usuário não encontrado');
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


// export const authController = {
//     async login(req: Request, res: Response) {
//         const {email, senha} = req.body
//         const user = await knex('user')
//             .where(email: user)
//             .select()
//             .first()
//     if(!user){
//         return res.status(404).send({error: "User not found"})
//     }
   
//     if(!await bcrypt.compare(senha, user.senha)){
//         return res.status(401)
//           .send({error: "Password incorrect"})
//     }
    
//     user.senha = undefined
    
//     const token = jwt.sign({
//                     id: user.id,
//                     email: user.email,
//                     senha: user.senha
//                 },
//                     secret.key
//                 );
//                 return res.json(token);
//   }
// }

