
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  id_imdb: {
    type: Number
  },
  id_moviedb: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  runtime: {
    type: String
  },
  networks: {
    type: String
  },
  genre: {
    type: String
  },
  country: {
    type: String
  },
  status_show: {
    type: String
  },
  trailer: {
    type: String
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
  seasons: [],
  comments: []
});


export default schema;