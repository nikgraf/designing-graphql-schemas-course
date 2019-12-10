const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    name: String
    description: String
  }

  type Query {
    product(id: ID!): Product
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
  mockEntireSchema: false
});

server.listen(4001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
