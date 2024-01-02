// shoppingCart.test.ts

import ShoppingCart from './shoppingCart';

// @ts-ignore
describe('ShoppingCart', () => {
  // @ts-ignore
  it('should calculate the total price correctly', () => {
    const cart = new ShoppingCart();
    cart.addItem('ProductA', 2, 10); // ProductA, quantity: 2, unit price: $10
    cart.addItem('ProductB', 3, 15); // ProductB, quantity: 3, unit price: $15

    const totalPrice = cart.getTotalPrice();
    // @ts-ignore
    expect(totalPrice).toBe(2 * 10 + 3 * 15); // Total price should be 2 * 10 + 3 * 15 = $80
  });

  // @ts-ignore
  it('should apply discounts correctly', () => {
    const cart = new ShoppingCart();
    cart.addItem('ProductA', 2, 10); // ProductA, quantity: 2, unit price: $10
    cart.applyDiscount('DISCOUNT_10_PERCENT'); // Apply a 10% discount

    const totalPrice = cart.getTotalPrice();
    // @ts-ignore
    expect(totalPrice).toBeCloseTo(2 * 10 * 0.9); // Total price after discount should be approximately 2 * 10 * 0.9 = $18
  });
});
