
import Debug from 'debug';
import schema from './schemas/movie';

const debug = Debug('sofanerd.models.movie');

export const model = (connection) => {
  return connection.model('Movie', schema);
};