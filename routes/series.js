
import Debug from 'debug';
import * as Controller from '../controllers/series';

const debug = Debug('sofanerd.routes.serie');

export default [
  {
    method: 'GET',
    path: '/api/series',
    handler: Controller.findAll
  }
];