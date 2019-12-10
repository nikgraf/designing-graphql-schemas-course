```graphql
{
  product(id: $id) {
    name
    description
    image {
      url
      description
      thumbnailUrl(width: 800, height: 600)
    }
  }
}
```
