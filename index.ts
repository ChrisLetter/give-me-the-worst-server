const { ApolloServer } = require('apollo-server');
const { PORT } = require('./config');
const typeDefs = ``;
const resolver = ``;

const server = new ApolloServer({ typeDefs, resolver });

server.listen({ port: PORT }, (err: any) => {
  if (err) {
    console.log(err);
  } else {
    `server listening on port ${PORT}`;
  }
});
