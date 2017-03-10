
import jwt from 'jsonwebtoken';

export const generate = (payload, audience) => {
  let aud = audience ? audience : 'api';
  return jwt.sign(payload, process.env.NODE_JWT_SALT, {
    algorithm: 'HS256',
    audience: aud
  });
};

export const decode = (token) =>  jwt.decode(token, { complete: true });

export const verify = (token, options) => jwt.verify(token, process.env.NODE_JWT_SALT, options);