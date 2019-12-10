const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    url: String
    description: String
    thumbnailUrl(width: Int, height: Int): String
  }

  type PaginationEntry {
    cursor: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: ID!
    endCursor: ID!
  }

  type RecommendedProductConnectionPageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    hasNextPages(amount: Int!): [PaginationEntry!]!
    hasPreviousPages(amount: Int!): [PaginationEntry!]!
    startCursor: ID!
    endCursor: ID!
  }

  type RecommendedProductEdge {
    node: Product!
    cursor: ID!
    boughtTogetherPercentage: Int
  }

  type RecommendedProductConnection {
    edges: [RecommendedProductEdge]
    pageInfo: RecommendedProductConnectionPageInfo!
  }

  enum RecommendedProductConnectionOrder {
    CREATED_AT
    NAME
  }

  type Product {
    id: ID!
    name: String
    description: String
    image: Image
    recommendedProducts(
      first: Int
      after: ID
      last: Int
      before: ID
      orderBy: RecommendedProductConnectionOrder
    ): RecommendedProductConnection!
  }

  type Query {
    product(id: ID!): Product
    productBySlug(slug: String!): Product
  }

  input CreateProductInput {
    name: String!
    description: String
  }

  type CreateProductPayload {
    product: Product!
  }

  type Mutation {
    createProduct(input: CreateProductInput!): CreateProductPayload!
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
