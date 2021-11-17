const { UserModel } = require('../../models/model');

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
      console.log(registrationInput);
      const user = await UserModel.findOne({ email: email });
      console.log(user);
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
  },
};
