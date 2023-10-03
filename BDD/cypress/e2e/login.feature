Feature: Admin Panel
  Scenario Outline: Access Admin Panel
    Given I visit EBAC Store
    When I log in with <user> and pass <pass>
    Then the Admin dashboard page should be visible

    Examples:
      | user    | pass                     |
      | gerente | GD*peToHNJ1#c$sgk08EaYJQ |