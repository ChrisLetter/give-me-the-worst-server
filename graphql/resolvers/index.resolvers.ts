import userResolvers from './user.resolvers';

const resolvers = {
  Mutation: {
    ...userResolvers.Mutation,
  },
};

export default resolvers;
