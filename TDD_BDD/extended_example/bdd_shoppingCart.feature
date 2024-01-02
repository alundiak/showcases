# shoppingCart.feature

Feature: ShoppingCart
  In order to calculate the total price and apply discounts
  As a shopper
  I want to interact with a shopping cart

  Scenario: Calculate total price
    Given a shopping cart is empty
    When I add 2 units of "ProductA" with a unit price of $10
    And I add 3 units of "ProductB" with a unit price of $15
    Then the total price should be $80

  Scenario: Apply discount
    Given a shopping cart has 2 units of "ProductA" with a unit price of $10
    When I apply a 10% discount
    Then the total price should be $18
