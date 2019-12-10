```graphql
{
  product(id: $id) {
    title
    description
    descriptionHtml: description(format: HTML)
  }
}
```
