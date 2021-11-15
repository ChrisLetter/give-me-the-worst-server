const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs/typeDefs.js');
const resolvers = require('./graphql/resolvers/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context({ req }) {
  //   const token = req.headers.authorization;
  //   const user = getUserFromToken(token);
  //   return { ...db, user, createToken };
  // },
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
