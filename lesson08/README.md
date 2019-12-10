```graphql
{
  product(id: "abc") {
    recommendedProducts(first: 10) {
      edges {
        node {
          name
          image {
            url
          }
        }
        boughtTogetherPercentage
      }
      pageInfo {
        hasNextPages(amount: 3) {
          cursor
        }
        hasPreviousPages(amount: 3) {
          cursor
        }
        startCursor
        endCursor
      }
    }
  }
}
```
