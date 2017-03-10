
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  id_imdb: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String
  },
  description: {
    type: String
  },
  year: {
    type: Number
  },
  genre: {
    type: String
  },
  country: {
    type: String
  },
  director: {
    type: String
  },
  writer: {
    type: String
  },
  trailer: {
    type: String
  },
  published: {
    type: Array
  },
  featured: {
    type: Array
  },
  checkins: [{
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    created_at:{
      type: Date,
      default: Date.now
    }
  }],
  reactions: [{
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    note: {
      type: Number
    },
    created_at:{
      type: Date,
      default: Date.now
    }
  }],
  favorites: [],
  collections: [],
  comments: []
});

export default schema;