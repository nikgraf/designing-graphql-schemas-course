const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  enum ProductDescriptionFormat {
    TEXT
    HTML
  }

  enum Locales {
    EN
    FR
    DE
  }

  type Image {
    url: String
    description: String
    thumbnailUrl(width: Int, height: Int): String
  }

  type Product {
    id: ID!
    name: String
    description(format: DescriptionFormat = TEXT, locale: Locales = EN): String
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
