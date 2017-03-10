
import Debug from 'debug';
import Joi from 'joi';
import * as Controller from '../controllers/user';

const debug = Debug('sofanerd.routes.auth');

const userCreatePayloadValidation = Joi.object({
  username: Joi.string().trim().lowercase().min(3).max(20).required(),
  name: Joi.string().min(1).max(50).required(),
  email: Joi.string().email().min(1).max(40).required(),
  password: Joi.string().token().min(6).max(40).required()
});

export default [
  {
    method: 'POST',
    path: '/api/user',
    config: {
      validate: {
        payload: userCreatePayloadValidation
      }
    },
    handler: Controller.create
  }
];