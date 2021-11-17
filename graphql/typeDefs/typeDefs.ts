const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: String
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    places: [String]
  }
  type Place {
    _id: String
    name: String!
    latitude: Int!
    longitude: Int!
    averageRating: Int
    reviews: [String]
    placeId: String!
    placeType: String!
    photoReference: String
    totalUserRating: Int
  }

  type Query {
    getPlaces: [Place]
  }

  type Mutation {
    loginUser(loginInput: LoginUserInput): UserInfo!
    createUser(registrationInput: RegisterUserInput): UserInfo!
  }

  type UserInfo {
    _id: String!
    accessToken: String!
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  input RegisterUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

export = typeDefs;
