
import * as db from '../helpers/db';
import Debug from 'debug';

const debug = Debug('sofanerd.models');

const register = (server, options, next) => {
  const dbConenction = db.connect('sofanerd').connection;

  debug('Models initialize');
  require('./movie').model(dbConenction);
  require('./serie').model(dbConenction);
  require('./user').model(dbConenction);

  debug('Models registered');

  next();
};

register.attributes = {
  name: 'models',
  multi: false,
  once: true
};

export default {
  register
};