```graphql
{
  product(id: "abc") {
    name
    description
    image {
      url
      description
    }
    recommendedProducts(first: 10) {
      edges {
        node {
          name
          description
          image {
            url
            description
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
```
