```graphql
{
  product(id: $id) {
    name
    description
    imageObject {
      url
    }
    image {
      url
      description
      thumbnailUrl(width: 800, height: 600)
    }
  }
}
```
