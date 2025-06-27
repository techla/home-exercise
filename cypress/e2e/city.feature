Feature: City card list on the city page

  Background:
    Given I am on the city page for city "Paris" with ID "415144"

  Scenario: City card list is present in the DOM
    Then the city card list should exist in the DOM

  Scenario: Toggle button hides and shows the city card list
    When I click on the "Collapse" button
    Then the city card list should not be visible
    And the city card list should still exist in the DOM
    When I click on the "Expand" button
    Then the city card list should be visible

  Scenario: Current city is not listed among other cities
    Then I should not see a city card for "Paris"

  Scenario: Each city card is entirely clickable
    Given the city card list is visible
    When I click on the city card for "Lisbon"
    Then I should be navigated to "http://localhost:3000/city/665920"