Feature: Restaurant card list navigation

  Background:
    Given I am on the city page for city "Paris" with ID "415144"

  Scenario: Each restaurant card is entirely clickable
    When I click on the restaurant card for "Tosca"
    Then I should be navigated to the external link "https://www.thefork.com/restaurant/tosca-rbca2c752-0887-4d4c-b195-f0402d7c1ef5"