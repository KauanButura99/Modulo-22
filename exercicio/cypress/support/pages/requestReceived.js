/// <reference types="cypress" />

export const requestReceived = {
  get message() { return cy.get('.woocommerce-notice') }
}