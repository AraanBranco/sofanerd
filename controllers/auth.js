
import Boom from 'boom';
import * as db from '../helpers/db';

export const login = async(request, reply) => {
  const { User } = db.connect('sofanerd').connection.models;
  let { username, password } = request.payload;
  let user = await User.findOne({
    username
  });

  if(!user || !await user.checkPassword(password)) {
    return reply(Boom.unauthorized('Credentials invalid!'));
  }

  reply({
    token: user.getToken(),
    user
  });
};