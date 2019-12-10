```graphql
updateCart(input: { productIds: ["abc"] })
updateCart(input: { productIds: ["abc", "bcd"] })
updateCart(input: { couponCode: "christmasSpecial" })
createOrder(input: { addressId: "lkj", paymentInfoId: "jhg" })
```

vs

```graphql
addProductToCart(input: { productId: "abc" })
addProductToCart(input: { productId: "bcd" })
applyCouponToCart(input: { code: "christmasSpecial" })
checkout(input: { addressId: "lkj", paymentInfoId: "jhg" })
```

## Benefits

- We indicate which actions/use-cases are supported.
- There is no need for nullable input fields for non-nullable properties of a model.
- We can define which input fields must be provided together in separate mutations.
