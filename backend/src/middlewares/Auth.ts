import expressJWT from 'express-jwt';
import secret from '../config/secret';

export const Auth = expressJWT.expressjwt({
    secret: secret.key,
    algorithms: ["HS256"]
});

