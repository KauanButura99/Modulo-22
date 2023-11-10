Feature: Register a account
  Scenario: Access Minha-Conta Page
    Given I visit EBAC Store
    When reigster a email and password
    Then must Olá be visible
