Feature: Accessibility Testing - WCAG 2.1 AA Compliance
  As a user with accessibility needs
  I want the application to be fully accessible according to WCAG 2.1 AA standards
  So that I can navigate and use all features effectively with assistive technologies

  Background:
    Given I am on the city page for city "Paris" with ID "415144"
    Given axe-core is loaded

  Scenario: WCAG 2.1 AA compliance check
    Then the application should be fully accessible