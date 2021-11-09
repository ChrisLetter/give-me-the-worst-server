import * as mongoose from './index'

const Schema = mongoose.Schema;

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
  reviews: {
    type: Array
  },
  placeId: {
    type: String,
    required: true
  },
  placeType: {
    type: String,
    required: true
  },
  photoReference: {
    type: String,
  },
  totalUserRating: {
    type: Number,
  }
})

const PlaceModel = mongoose.model('Place', placeSchema)

export = PlaceModel;