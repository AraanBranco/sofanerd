
import Debug from 'debug';
import Routes from '../routes';

const debug = Debug('sofanerd.routes');

const register = async (server, options, next) => {
  try {
    debug('Inicialize plugins');

    let loadedRoutes = await Routes.load();

    server.route(loadedRoutes);

    return next();
  } catch (err) {
    debug(err);
  }
};

register.attributes = {
  name: 'routes'
};

export default {
  register
}