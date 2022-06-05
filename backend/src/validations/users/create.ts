import { validate, Joi } from "express-validation";

export const create = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        endereco: Joi.string().required(),
        telefone: Joi.string().min(9).max(15).required(),
        senha: Joi.string().min(2).max(50).required(),
    }),
});
