Feature: Checkout
  Scenario: Checkout
    Given I visit Ebac Shop
    When  Should register a product
    And Fill your data on checkout page
    Then a success screen must appear