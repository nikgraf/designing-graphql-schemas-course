```graphql
mutation CreateProductMutation($input: CreateProductInput!) {
  createProduct(input: $input) {
    product {
      id
      name
    }
  }
}
```

```json
{
  "input": {
    "name": "Greenbook",
    "description": "Made out of recycled materials."
  }
}
```
