
import Hapi from 'hapi';
import dotenv from 'dotenv';
import Debug from 'debug';
import JWT from 'hapi-auth-jwt2';
import Models from './models';
import Auth from './plugins/auth';
import Routes from './plugins/routes';

dotenv.config();

const debug = Debug('sofanerd.server');
const server = new Hapi.Server({
  debug: {
    request: ['error', 'uncaught']
  }
});

server.connection({
  port: process.env.NODE_PORT || 3000
});

let initializer = [
  JWT,
  Auth,
  Models,
  Routes
];

try {
  server.register(initializer, (error) => {
      if(error) {
        debug(error);
      } else {
        debug('Starting server');

        server.start((err) => {
          if(err) {
            debug(err);
          } else {
            debug(`Server running at: ${server.info.uri}`);
          }
        });
      }
    }
  );
} catch (err) {
  debug(err);
  throw err;
}

export default server;