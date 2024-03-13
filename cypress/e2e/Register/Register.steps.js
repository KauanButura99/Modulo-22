///   <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
const CreateAccountPage = require('../../support/pages/createAccount')

Given('I visit EBAC Store in "/minha-conta" page', () => {
  cy.visit('/minha-conta/')
});

When('Reigister a email and password', () => {
  let email = faker.internet.email()
  let pass = faker.internet.password()

  CreateAccountPage.register(email, pass)
})

Then('"Olá" must be visible', () => {
  cy.location('pathname').should('be.equal', '/minha-conta/')
  cy.contains('h1', 'Minha conta').should('be.visible')
})
