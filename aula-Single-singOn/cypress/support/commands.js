Cypress.Commands.add('microsoftSingleSignOn', () => {
  cy.contains('header a ', 'Login').click()
  cy.contains('button', 'Continue with Microsoft Account ').click()
  cy.origin('https://login.live.com', () => {
    cy.get('input[type="email"]').type(Cypress.env('username'), { log: false })
    cy.get('input[type="submit"]').click()
    cy.get('input[type="password"]').type(Cypress.env('senha'), { log: false })
    cy.contains('input', 'Sign in').click()
    cy.get('input[type="button"][value="No"]').click()
  })
})