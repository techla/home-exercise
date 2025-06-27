import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Then('the city card list should exist in the DOM', () => {
  cy.get('[data-testid=city-list]').should('exist')
})

When('I click on the {string} button', (label) => {
  cy.get(`[aria-label*="${label}"]`).click()
})

Then('the city card list should not be visible', () => {
  cy.get('[data-testid="city-list"]').should('not.be.visible')
})

Then('the city card list should still exist in the DOM', () => {
  cy.get('[data-testid="city-list"]').should('exist')
})

Then('the city card list should be visible', () => {
  cy.get('[data-testid="city-list"]').should('be.visible')
})

Then('I should not see a city card for {string}', (cityName) => {
  cy.get('[data-testid=city-list]').should('not.contain.text', cityName)
})

Given('the city card list is visible', () => {
  cy.get('[data-testid=city-list]').should('be.visible')
})

When('I click on the city card for {string}', (cityName) => {
  cy.contains('[data-testid=city-card]', cityName)
    .click()
})

Then('I should be navigated to {string}', (url) => {
  cy.url().should('eq', url)
})