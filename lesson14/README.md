```graphql
mutation UpdateProductMutation($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    product {
      name
      description
    }
  }
}
```

```json
{
  "input": {
    "productId": "abc",
    "name": "Blackbook+",
    "description": "Ships with a working keyboard."
  }
}
```

```json
{
  "input": {
    "productId": "abc",
    "description": null
  }
}
```

```json
{
  "input": {
    "productId": "abc",
    "name": null
  }
}
```
