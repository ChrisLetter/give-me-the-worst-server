import { ApolloServer } from 'apollo-server';
import config from './config';
const typeDefs = ``;
const resolver = ``;

const server = new ApolloServer({ typeDefs, resolver });

server.listen({ port: config.PORT }, (err: any) => {
  if (err) {
    console.log(err);
  } else {
    `server listening on port ${config.PORT}`;
  }
});
