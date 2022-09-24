const { UserModel, PlaceModel } = require('../../models/model');
import { IPlace } from '../../interfaces/interfaces';
const { AuthenticationError } = require('apollo-server');
const bcrypt = require('bcrypt');
import { createToken } from './auth';

module.exports = {
  Mutation: {
    loginUser: async (_: any, { loginInput }) => {
      const { email, password } = loginInput;
      const user = await UserModel.findOne({
        email: email,
      });
      if (!user) {
        throw new AuthenticationError('There was an error logging in');
      }
      const validatedPassword = bcrypt.compare(password, user.password);
      if (!validatedPassword) {
        throw new AuthenticationError('There was an error logging in');
      } else {
        const _idString = user._id.toString();
        const token = createToken(_idString);
        return { _id: user._id, accessToken: token };
      }
    },

    createUser: async (_: any, { registrationInput }) => {
      const { firstName, lastName, email, password } = registrationInput;
      const user = await UserModel.findOne({ email: email });
      if (user) {
        throw new AuthenticationError(
          'there was an error creating the account',
        );
      } else {
        const hash = await bcrypt.hash(password, 10);
        const user = await UserModel.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hash,
        });
        const _idString = user._id.toString();
        const token = await createToken(_idString);
        return { _id: user._id, accessToken: token };
      }
    },

    addPlace: async (_: any, { addPlaceObjectInput, userInfo }) => {
      const {
        name,
        latitude,
        longitude,
        averageRating,
        reviews,
        placeId,
        placeType,
        photoReference,
        totalUserRating,
      } = addPlaceObjectInput;
      const { _id } = userInfo;
      let messageToSend = '';
      const place: IPlace | any = await PlaceModel.findOne({
        placeId: placeId,
      });
      if (place) {
        const user: any = await UserModel.findOne({ _id: _id });
        let isAlreadySaved = false;
        user.places.forEach((item: string) => {
          if (item !== place._id) {
            messageToSend = 'You have already saved this place';
            isAlreadySaved = true;
          }
        });
        if (isAlreadySaved === false) {
          user.places.push(place._id);
          user.save();
          messageToSend = 'This place was successfully added!';
        }
      } else {
        const newPlace: IPlace = await PlaceModel.create({
          name: name,
          latitude: latitude,
          longitude: longitude,
          averageRating: averageRating,
          reviews: reviews,
          placeId: placeId,
          placeType: placeType,
          photoReference: photoReference,
          totalUserRating: totalUserRating,
        });
        console.log('newPlace', newPlace);
        const user = await UserModel.findOne({ _id: _id });
        user.places.push(place._id);
        user.save();
        messageToSend = 'This place was successfully added!';
      }
      return { message: messageToSend };
    },

    deletePlace: async (_: any, { deletePlaceId, userInfo }) => {
      const user = await UserModel.findOne({ _id: userInfo._id });
      const updatedPlaces = user.places.filter((item: string) => {
        item !== deletePlaceId._id;
      });
      user.places = updatedPlaces;
      user.save();
      return { message: 'This place was successfully deleted' };
    },
  },
};
