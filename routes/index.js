
import Debug from 'debug';
import Bluebird from 'bluebird';
import glob from 'glob';
import path from 'path';

const debug = Debug('sofanerd.routes');
const globAsync = Bluebird.promisify(glob);

export default {
  async load() {
    try {
      let routes = [];
      debug('Load all routes');

      let files = await globAsync('**/!(index).js', {
        cwd: path.resolve(__dirname)
      });

      files.forEach((file) => {
        let allRoutes = require(`./${file}`).default;

        routes.push(...allRoutes);
      });

      debug('Routes loaded');
      return routes;
    } catch (err) {
      debug(err);
    }
  }
}