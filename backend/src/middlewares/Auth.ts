
import { expressjwt } from 'express-jwt';
import secret from '../config/secret';

export const Auth = expressjwt({
    secret: secret.key,
    algorithms: ["HS256"]
});

