```graphql
addProductToCart(input: { productId: "abc" })
addProductToCart(input: { productId: "bcd" })
```

vs

```graphql
addProductToCart(input: { productIds: ["abc", "bcd"] })
```
