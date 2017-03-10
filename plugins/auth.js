
import Debug from 'debug';
import Boom from 'boom';
import * as db from '../helpers/db';

const debug = Debug('sofanerd.authStrategy');

const register = (server, options, next) => {
  try {
    debug('Inicialize plugins');

    server.auth.strategy('token-api', 'jwt', {
      key: process.env.NODE_JWT_SALT,
      async validateFunc(decoded, request, reply) {
        const { User } = db.connect('sofanerd').connection.models;

        let user = await User.findOne({
          _id: decoded._id
        });

        if(!user) {
          return reply(Boom.notFound('User not found'), false);
        } else {
          return reply(null, true, user);
        }
      },
      verifyOptions: {
        algorithms: ['HS256'],
        audience: 'api'
      }
    });

    debug('Plugins registered');
    next();
  } catch (err) {
    debug(err);
    throw err;
  }
};

register.attributes = {
  name: 'auth'
};

export default {
  register
};