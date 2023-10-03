/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const { dashbordPage } = require("../../support/pages/index")

Given('I visit EBAC Store', () => {
  cy.visit('/')
})

When('I log in with user {string} and pass {string}', (user, pass) => {
  cy.login(user, pass)
})

Then('the Admin dashboard page should be visible', () => {
  dashbordPage.siteName.should("be.visible")
})
