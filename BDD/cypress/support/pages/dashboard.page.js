/// <reference types="cypress" />

export const dashbordPage = {
  get siteName() { return cy.get(`#wp-admin-bar-site-name > .ab-item`) }
}