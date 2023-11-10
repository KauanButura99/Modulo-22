Feature: Register a account
  Scenario: Access Minha-Conta Page
    Given I visit EBAC Store in "/minha-conta" page
    When Reigister a email and password
    Then "Olá" must be visible
