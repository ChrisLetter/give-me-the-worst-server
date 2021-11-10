import { ApolloServer } from 'apollo-server';
import config from './config';
import typeDefs from './graphql/typeDefs/typeDefs';
import resolvers from './graphql/resolvers/index.resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: config.PORT }, (err: any) => {
  if (err) {
    console.log(err);
  } else {
    `server listening on port ${config.PORT}`;
  }
});
