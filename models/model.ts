const mongoose = require('./db');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  places: [
    {
      type: String,
    },
  ],
});

const placeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  averageRating: {
    type: Number,
  },
  reviews: [
    {
      type: String,
    },
  ],
  placeId: {
    type: String,
    required: true,
  },
  placeType: {
    type: String,
    required: true,
  },
  photoReference: {
    type: String,
  },
  totalUserRating: {
    type: Number,
  },
});

const UserModel = mongoose.model('User', userSchema);
const PlaceModel = mongoose.model('Place', placeSchema);

export = { UserModel, PlaceModel };
