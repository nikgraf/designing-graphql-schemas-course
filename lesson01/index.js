const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Real Hello Workshop"
  }
};

const mocks = {
  String: () => "Hello Workshop"
};

const server = new ApolloServer({
  typeDefs,
  mocks,
  mockEntireSchema: false,
  resolvers
});

server.listen(4001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
