/// <reference types="cypress" />

class faturamento {
  get #name() { return cy.get('#billing_first_name_field > label') }
  get #lastName() { return cy.get('#billing_last_name') }
  get #company() { return cy.get('#billing_company') }
  get #country() { return cy.get('#select2-billing_country-container ') }
  get #address() { return cy.get('#billing_address_1') }
  get #city() { return cy.get('#billing_city') }
  get #state() { return cy.get('#select2-billing_state-container') }
  get #postCode() { return cy.get('#billing_postcode') }
  get #phone() { return cy.get('#billing_phone') }
  get #emailAddress() { return cy.get('#billing_email') }

  get #payment() { return cy.get('input[type="radio"][value="cheque"]') }
  get #terms() { return cy.get('input[type="checkbox"][name="terms"]') }
  get #finish() { return cy.get('input[type="submit"][value="Finalizar compra"]') }

  registerYourPersonalDatas(name, lastname, company, country, address, city, state, zipCode, phone, email) {
    this.#name.type(name)
    this.#lastName.type(lastname)
    this.#company.type(company)
    this.#country.click().type(country).get('[aria-selected="true"]').click()
    this.#address.type(address)
    this.#city.type(city)
    this.#state.click().type(state).get('[aria-selected="true"]').click()
    this.#postCode.type(zipCode)
    this.#phone.type(phone)
    this.#emailAddress.type(email)
    this.#payment.click()
    this.#terms.click()
    this.#finish.click()
  }

}

module.exports = new faturamento()