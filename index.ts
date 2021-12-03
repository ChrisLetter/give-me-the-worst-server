const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs/typeDefs');
const resolvers = require('./graphql/resolvers/resolvers');
require('dotenv').config();
const PORT = process.env.PORT;
console.log(PORT);
import { getUserFromToken, createToken } from './graphql/resolvers/auth';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  async context({ req }) {
    const token = req.headers.authorization?.split(' ')[1];
    const user = await getUserFromToken(token);
    return { user, createToken };
  },
});

server.listen(PORT).then(() => {
  console.log(`🚀 Server ready`);
});
