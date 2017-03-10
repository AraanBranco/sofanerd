
import Debug from 'debug';
import schema from './schemas/user';

const debug = Debug('sofanerd.models.user');

export const model = (connection) => {
  return connection.model('User', schema);
};