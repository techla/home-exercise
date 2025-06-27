import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the restaurant card list is visible', () => {
  cy.get('[data-testid=restaurant-list]').should('be.visible')
})

When('I click on the restaurant card for {string}', function(name) {
  this.name = name;
  cy.contains('[data-testid=restaurant-card]', new RegExp(name, 'i'))
    .should('be.visible')
    .should('have.attr', 'href');
})

Then('I should be navigated to the external link {string}', function(url) {
  cy.contains('[data-testid=restaurant-card]', this.name)
    .should('have.attr', 'href', url);
})