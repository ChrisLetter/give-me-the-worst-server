const { gql } = require('apollo-server');

const typeDefs = gql`
type User {
  firstName:String!
  lastName: String!
  email: String!
  password: String!
  places: [String]
}
type Place {
  id: String!
  name: String!
  latitude: Number!
  longitude: Number!
  averageRating: Number!
  reviews: [String]
  placeId: String!
  placeType: String!
  photoReference: String
  totalUserRating: Number
}


`