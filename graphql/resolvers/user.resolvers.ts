import { IRegisterInfo, IUser } from '../../Interfaces/Interfaces';
import UserModel = require('../../models/user.model');

export default {
  Mutation: {
    createUser: async (_: any, registrationInput: IRegisterInfo) => {
      const { firstName, lastName, email, password } = registrationInput;
      const user = await UserModel.find({ email: email });
      if (user) {
        console.log('User already exists, please login');
      } else {
        const newUser = await UserModel.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });

        return { _id: newUser._id, accessToken: 'fakeToken' };
      }
    },
  },
};
