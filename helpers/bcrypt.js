
import bcrypt from 'bcrypt';
import Bluebird from 'bluebird';

// Generate Hash with Bcrypt
export const hash = (value) => bcrypt.hashSync(value, process.env.NODE_BCRYPT_SALT);

// Compare hashs passwords
export const compare = async (password, hash) => {
  console.log(password, hash);
  let compareAsync = Bluebird.promisify(bcrypt.compare);
  return await compareAsync(password, hash);
};