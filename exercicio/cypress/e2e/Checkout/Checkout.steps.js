/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const { requestReceived } = require('../../support/pages/requestReceived')
const faturamento = require('../../support/pages/address')
const dados = require('../../fixtures/dados.json')

Given('I visit Ebac Shop', () => {
  cy.visit('/')
})

When('Should register a product', () => {
  cy.addProduct()
  cy.goToCheckoutPage()
})

When('Fill your data on checkout page', () => {
  faturamento.registerYourPersonalDatas(
    dados[0].name,
    dados[0].lastname,
    dados[0].company,
    dados[0].country,
    dados[0].address,
    dados[0].city,
    dados[0].state,
    dados[0].zipCode,
    dados[0].phone,
    dados[0].email
  )
})

Then('a success screen must appear', () => {
  requestReceived.message.should('contain', 'Obrigado. Seu pedido foi recebido.')
})


