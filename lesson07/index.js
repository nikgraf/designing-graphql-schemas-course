const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    url: String
    description: String
    thumbnailUrl(width: Int, height: Int): String
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: ID!
    endCursor: ID!
  }

  type RecommendedProductEdge {
    node: Product!
    cursor: ID!
  }

  type RecommendedProductConnection {
    edges: [RecommendedProductEdge]
    pageInfo: PageInfo!
  }

  type Product {
    id: ID!
    name: String
    description: String
    image: Image
    recommendedProducts(first: Int!, after: ID): RecommendedProductConnection!
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
