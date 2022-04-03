const { ApolloServer, gql } = require("apollo-server");

// ? Scalar Types: String, Int, Float, Boolean, ID!

//? String - can return String or null
//? String! - can only return String

const typeDefs = gql`
  type Query {
    hello: String!
    numberOfAnimals: Int
    price: Float
    loggedIn: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "World";

      //! return null;
    },
    numberOfAnimals: () => {
      return 2;
    },
    price: () => {
      return 2.5;
    },
    loggedIn: () => {
      return true;
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
