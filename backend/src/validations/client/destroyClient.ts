import { validate, Joi } from "express-validation";

export const destroyClient = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});
