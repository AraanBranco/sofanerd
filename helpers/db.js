
import mongoose from 'mongoose';
import Bluebird from 'bluebird';
import Debug from 'debug';

mongoose.Promise = Bluebird;

const debug = Debug('sofanerd.db.mongodb');
const connections = {};

export const connect = (connectionName = Date.now().toString(), connectionUrl = process.env.MONGODB_URL, options = { server: { poolSize: 10 } }) => {
  if(!connections.hasOwnProperty(connectionName)) {
    debug('Connection to MongoDB');

    const connection = mongoose.createConnection(connectionUrl, options);

    connections[connectionName] = connection;

    if(process.env.DEBUG) {
      mongoose.set('debug', true);
    }

    // Connection Open
    connection.once('open', () => {
      debug(`Connection open with ${connectionUrl}`);
    });

    // Connected
    connection.once('connected', () => {
      debug(`Connected to ${connectionUrl}`);
    });

    // Disconnect
    connection.once('disconnected', () => {
      debug(`Disconnected from ${connectionUrl}`);
    });

    // Error
    connection.once('error', (error) => {
      debug('Connection error', error);
    });

    process.on('SIGINT', () => {
      connection.close(() => {
        debug('Connection closed by ctrl+c command');
        process.exit(0);
      });
    });
  }

  return {
    name: connectionName,
    connection: connections[connectionName]
  };
};

export const disconnect = async (connectionName) => {
  if(connections.hasOwnProperty(connectionName) === false) {
    throw new Error(`Connection name ${connectionName} does not exists`);
  }

  await connections[connectionName].close();
};