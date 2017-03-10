
import Debug from 'debug';
import schema from './schemas/serie';

const debug = Debug('sofanerd.models.serie');

export const model = (connection) => {
  return connection.model('Serie', schema);
};