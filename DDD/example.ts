/*
In this example:

Product is an ENTITY representing a product in the e-commerce domain.
Quantity is a VALUE OBJECT representing the quantity of a product.
ShoppingCart is an AGGREGATE that manages items in the shopping cart.
ShoppingCartService is an application service coordinating the use of the domain entities and aggregates. 

Each bounded context (Product Catalog, Order Management, Customer Management) has its own 
set of models (Product, Order, Customer) and services (ProductCatalogService, OrderManagementService, CustomerManagementService). 
The boundaries of each context are implied by the separation of these classes.

*/

// Domain Entities
// @ts-ignore
class Product {
  constructor(public id: string, public name: string, public price: number) { }
}

// Domain Value Object
class Quantity {
  constructor(public value: number) {
    if (value < 0) {
      throw new Error("Quantity cannot be negative");
    }
  }
}


// Quantity could be replaced by TypeScrypt type: NonNegativeNumber
// 
// type NonNegativeNumber = number & { __nonNegativeNumber: never };
// 
// type that represents a number that should not be negative. It's created using TypeScript's type intersection (&) 
// to enforce that it must be a number and have a property (__nonNegativeNumber) with a type (never). 
// This is a way to create a branded or tagged type.
// 
// __nonNegativeNumber is not a built-in TypeScript feature; it's a naming convention often used to create what's known as a "branded" or "tagged" type
// 
// I would need to use function to verify if value is negative or typed as NonNegativeNumber
// 
// function createNonNegativeNumber(value: number): NonNegativeNumber {
//   if (value < 0) {
//     throw new Error("Value cannot be negative");
//   }
//   return value as NonNegativeNumber;
// }


type CartItem = { product: Product; quantity: Quantity };
// By introducing a clear type (CartItem) for the items in the shopping cart, you make the expectations about the structure of the items explicit. 
// If the ShoppingCart class changes its internal representation, it needs to ensure that it still conforms to the CartItem type.
// This approach helps in maintaining a stable contract between classes, reducing the likelihood of breaking changes. 

// Domain Aggregate
// @ts-ignore
class ShoppingCart {
  private items: Map<string, CartItem> = new Map();

  addItem(product: Product, quantity: Quantity): void {
    // @ts-ignore
    const existingItem = this.items.get(product.id);

    if (existingItem) {
      existingItem.quantity = new Quantity(existingItem.quantity.value + quantity.value);
    } else {
      // @ts-ignore
      this.items.set(product.id, { product, quantity });
    }
  }

  getItems(): CartItem[] {
    return Array.from(this.items.values());
  }
}

// Repository for ShoppingCart
class ShoppingCartRepository {
  private shoppingCarts: Map<string, ShoppingCart> = new Map();

  getShoppingCartById(cartId: string): ShoppingCart | undefined {
    return this.shoppingCarts.get(cartId);
  }

  saveShoppingCart(cartId: string, shoppingCart: ShoppingCart): void {
    this.shoppingCarts.set(cartId, shoppingCart);
  }
}

// A ShoppingCartRepository class is introduced to manage the retrieval and storage of shopping carts. This class abstracts the data store operations.
// The ShoppingCartService now uses the repository to load or create a shopping cart based on a provided cartId. 
// Additionally, a saveCart method is introduced to save the shopping cart back to the repository.
//
// The getShoppingCartById method in the ShoppingCartRepository can be considered a Factory Method (design pattern), creating instances of ShoppingCart based on an identifier.
//
// In a DDD context, a repository can be seen as providing a form of abstraction over the creation and retrieval 
// of aggregates (objects representing entities) within a specific context (such as a shopping cart).
// It abstracts the creation and management of related objects.
//


// Application Service
// you can consider the combination of ShoppingCart and ShoppingCartService as a simplified representation of a bounded context. 
// The idea is that these classes work together to model a specific part of the system—the shopping cart functionality.
class ShoppingCartService {
  private shoppingCartRepository: ShoppingCartRepository = new ShoppingCartRepository();
  private shoppingCart: ShoppingCart;

  constructor(cartId: string) {
    // Load or create a shopping cart based on the cartId
    this.shoppingCart = this.shoppingCartRepository.getShoppingCartById(cartId) || new ShoppingCart();
  }

  addToCart(product: Product, quantity: Quantity): void {
    // @ts-ignore
    this.shoppingCart.addItem(product, quantity);
  }

  getCartItems(): CartItem[] {
    // @ts-ignore
    return this.shoppingCart.getItems();
  }

  saveCart(): void {
    // Save the shopping cart back to the repository
    this.shoppingCartRepository.saveShoppingCart("someCartId", this.shoppingCart);
  }
}


// Bounded Context: Product Catalog
class ProductCatalogService {
  // Methods related to managing the product catalog
}

// Bounded Context: Order Management
class Order {
  constructor(public orderId: string, public items: { product: Product; quantity: Quantity }[]) { }
}

class OrderManagementService {
  // Methods related to managing orders
}

// Bounded Context: Customer Management
// @ts-ignore
class Customer {
  constructor(public customerId: string, public name: string, public email: string) { }
}

class CustomerManagementService {
  // Methods related to managing customers
}

//
// Example Usage
//

// @ts-ignore
const productService = new ShoppingCartService();
// @ts-ignore
const laptop = new Product("1", "Laptop", 1000);
// @ts-ignore
const phone = new Product("2", "Phone", 500);

const quantity1 = new Quantity(2);
const quantity2 = new Quantity(1);

// @ts-ignore
productService.addToCart(laptop, quantity1);
// @ts-ignore
productService.addToCart(phone, quantity2);

// @ts-ignore
const cartItems = productService.getCartItems();
console.log("Shopping Cart Items:", cartItems);

// Shopping Cart Items: [
//   {
//     product: Product { id: '1', name: 'Laptop', price: 1000 },
//     quantity: Quantity { value: 2 }
//   },
//   {
//     product: Product { id: '2', name: 'Phone', price: 500 },
//     quantity: Quantity { value: 1 }
//   }
// ]
