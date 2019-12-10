const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    url: String
    description: String
    thumbnailUrl(width: Int, height: Int): String
  }

  type Product {
    id: ID!
    name: String
    description: String
    imageUrl: String @deprecated(reason: "Use \`image { url }\`.")
    image: Image
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
