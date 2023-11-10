///   <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
const CreateAccountPage = require('../../support/pages/createAccount')

Given('I visit EBAC Store ', () => {
  cy.visit('/minha-conta')
})

When('reigster a email and password', () => {
  let email = faker.internet.email()
  let pass = faker.internet.password() // arrumar os elementos no page objects e pegar elementos de login 

  CreateAccountPage.register(email, pass)
})

Then('must Olá be visible', () => {
  cy.location('pathname').should('be.equal', '/minha-conta/')
  cy.contains('h1', 'Minha conta').should('be.visible')
})
