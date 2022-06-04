import { validate, Joi } from 'express-validation';


export const login = validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        senha: Joi.string().min(2).required(),
    })

});

