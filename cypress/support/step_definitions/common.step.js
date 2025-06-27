import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the city page for city {string} with ID {string}', (_name, id) => {
  cy.visit(`/city/${id}`)
})

