
import Debug from 'debug';
import Boom from 'boom';
import _ from 'lodash';
import schema from './schemas/user';
import * as jwt from '../helpers/jwt';
import { compare } from '../helpers/bcrypt';

const debug = Debug('sofanerd.models.user');

export const model = (connection) => {

  // Generate Token JWT for the user
  schema.methods.getToken = function({ aud = 'api' } = {}) {
    let data = _.pick(this.toObject(), '_id');
    return jwt.generate(data, aud);
  };

  // Check Password
  schema.methods.checkPassword = async function(password) {
    if(!this.password) {
      throw Boom.badRequest('User not have password');
    }

    const comparePassword = await compare(password, this.password);
    if(!comparePassword) {
      throw Boom.badRequest('Password not match');
    }

    return true;
  };

  return connection.model('User', schema);
};