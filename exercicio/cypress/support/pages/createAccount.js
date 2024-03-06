/// <reference types="cypress" />

class CreateAccountPage {
  get #email() { return cy.get('#reg_email') }
  get #password() { return cy.get('#reg_password') }
  get #submit() { return cy.get(':nth-child(4) > .button') }

  register(user, pass) {
    this.#email.type(user)
    this.#password.type(pass)
    this.#submit.click()
  }

}

module.exports = new CreateAccountPage()