// shoppingCart.ts

class ShoppingCart {
  private items: { name: string; quantity: number; price: number }[] = [];
  private discounts: { [discountCode: string]: number } = {
    DISCOUNT_10_PERCENT: 0.1,
  };

  addItem(name: string, quantity: number, price: number): void {
    this.items.push({ name, quantity, price });
  }

  applyDiscount(discountCode: string): void {
    if (this.discounts[discountCode]) {
      this.items.forEach((item) => {
        item.price *= 1 - this.discounts[discountCode];
      });
    }
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.quantity * item.price, 0);
  }
}

export default ShoppingCart;
