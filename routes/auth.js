
import Debug from 'debug';
import Joi from 'joi';
import * as Controller from '../controllers/auth';

const debug = Debug('sofanerd.routes.auth');

export default [
  {
    method: 'POST',
    path: '/api/auth',
    config: {
      validate: {
        payload: {
          username: Joi.string().trim().lowercase().required(),
          password: Joi.string().trim().token().min(5).max(40).required()
        }
      }
    },
    handler: Controller.login
  }
];