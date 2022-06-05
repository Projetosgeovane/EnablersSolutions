import secret from '../config/secret';
import { expressjwt } from "express-jwt";

export const Auth = expressjwt({
    secret: secret.key,
    algorithms: ["HS256"]
});

