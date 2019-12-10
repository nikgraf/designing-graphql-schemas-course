```graphql
{
  product(id: $id) {
    name
    description
    imageUrl
    image {
      url
      description
      thumbnailUrl(width: 800, height: 600)
    }
  }
}
```
