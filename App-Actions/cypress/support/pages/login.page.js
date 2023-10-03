/// <reference types="cypress" />

class LoginPage {
  get #user() { return cy.get("#user_login") }
  get #pass() { return cy.get("#user_pass") }
  get #submit() { return cy.get("#wp-submit") }

  login(user, pass) {
    this.#user.type(user)
    this.#pass.type(pass)
    this.#submit.click()
  }
}

module.exports = new LoginPage()