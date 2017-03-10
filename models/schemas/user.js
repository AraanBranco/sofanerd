
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  username: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  roles: { type: Array, default: ['user', 'authenticated'] },
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