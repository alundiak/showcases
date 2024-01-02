// shoppingCart.steps.ts

// @ts-ignore
import { Given, When, Then } from 'cucumber';
import ShoppingCart from './shoppingCart';
// @ts-ignore
import { expect } from 'chai';

let cart: ShoppingCart;

Given('a shopping cart is empty', () => {
  cart = new ShoppingCart();
});

When('I add {int} units of {string} with a unit price of ${int}', (quantity, productName, unitPrice) => {
  cart.addItem(productName, quantity, unitPrice);
});

When('I apply a {int}% discount', (discountPercent) => {
  const discountCode = `DISCOUNT_${discountPercent}_PERCENT`;
  cart.applyDiscount(discountCode);
});

Then('the total price should be ${float}', (expectedTotalPrice) => {
  const totalPrice = cart.getTotalPrice();
  expect(totalPrice).to.be.closeTo(expectedTotalPrice, 0.01);
});
