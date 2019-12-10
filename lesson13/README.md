```graphql
# Tab A
updateProductsInCart(input: { productIds: ["abc"] })
# Tab B
updateProductsInCart(input: { productIds: ["bcd"] })
# Server: ["bcd"]
```

vs

```graphql
# Tab A
addProductsToCart(input: { productIds: ["abc"] })
# Tab B
addProductsToCart(input: { productIds: ["bcd"] })
# Server -> ["abc", "bcd"]
```
