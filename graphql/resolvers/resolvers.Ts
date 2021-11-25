//@ts-ignore
const { UserModel, PlaceModel } = require('../../models/model');
import { IPlace, IUserFromDB } from '../../interfaces/interfaces';
//@ts-ignore
module.exports = {
  Mutation: {
    loginUser: async (_: any, { loginInput }) => {
      const { email, password } = loginInput;
      const user = await UserModel.findOne({
        email: email,
        password: password,
      });
      console.log('user from db', user);
      if (!user) {
        console.log('User name or password is incorrect');
      } else {
        console.log(user._id);
        return { _id: user._id, accessToken: 'fakeToken' };
      }
    },

    createUser: async (_: any, { registrationInput }) => {
      const { firstName, lastName, email, password } = registrationInput;
      const user = await UserModel.findOne({ email: email });
      if (user) {
        console.log(user);
        console.log('User already exists, please login');
      } else {
        const newUser = await UserModel.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
        console.log('newUser', newUser);

        return { _id: newUser._id, accessToken: 'fakeToken' };
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
      console.log(messageToSend);
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
