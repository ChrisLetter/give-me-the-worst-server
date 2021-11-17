const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs/typeDefs');
const resolvers = require('./graphql/resolvers/resolvers');
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context({ req }) {
  //   const token = req.headers.authorization;
  //   const user = getUserFromToken(token);
  //   return { ...db, user, createToken };
  // },
});

server.listen(PORT).then(() => {
  console.log(`🚀 Server ready`);
});
