
import mongoose from 'mongoose';
import { hash } from '../../helpers/bcrypt';

const Schema = mongoose.Schema;

const schema = new Schema({
  username: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String, set: hash },
  roles: { type: Array, default: ['user'] },
  favorites: [],
  collections: [],
  reactions: [{
    serie_id: {
      type: Schema.Types.ObjectId,
      ref: 'Serie',
    },
    movie_id: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
    },
    created_at:{
      type: Date,
      default: Date.now
    },
    note: {
      type: Number
    }
  }]
});

export default schema;