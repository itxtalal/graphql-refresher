const { ApolloServer, gql } = require("apollo-server");

//* Scalar Types: String, Int, Float, Boolean, ID!
//? String - can return String or null
//? String! - can only return String

//* Array
//? [String!] - Array cannot contain a null value
//? [String]! - Should return an Array, cannot be null
//? [String!]! - Should always return an array, having non null values

const typeDefs = gql`
  type Query {
    hello: String
    numberOfAnimals: Int
    price: Float
    loggedIn: Boolean!
    names: [String!]
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "World";
    },
    numberOfAnimals: () => {
      return 2;
    },
    price: () => {
      return 2.5;
    },
    loggedIn: () => {
      return true;
      //! return null;
    },
    names: () => {
      return ["Talal", "Ali"];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
