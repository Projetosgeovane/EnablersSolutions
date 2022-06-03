import { validate, Joi } from "express-validation";

export const create = validate({
    body: Joi.object({
        cpf: Joi.number().max(14).min(11),
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        endereco: Joi.string().required(),
        cidade: Joi.string().required(),
        complemento: Joi.string(),
        telefone: Joi.string().min(12).max(15).required(),
        uf: Joi.string().required().length(2),
        cep: Joi.number().max(9).min(8).required(),
        senha: Joi.string().required(),
    }),
});
