import * as mongoose from './index';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  places: {
    type: Array,
    default: []
  },
});

const UserModel = mongoose.model('User', userSchema);

export = UserModel;