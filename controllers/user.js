
import Boom from 'boom';
import * as db from '../helpers/db';

export const create = async(request, reply) => {
  const { User } = db.connect('sofanerd').connection.models;

  let user = new User(request.payload);
  user = await user.save();

  reply({
    token: user.getToken(),
    user
  });
};