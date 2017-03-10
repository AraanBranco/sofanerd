
import Hapi from 'hapi';
import dotenv from 'dotenv';
import Debug from 'debug';
import Models from './models';
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