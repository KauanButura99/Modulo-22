/// <reference types="cypress" />

const { dashbordPage, LoginPage } = require("../support/pages/index")
const data = require("../fixtures/data.json");
//const LoginPage = require("../support/pages/login.page")
//const { dashbordPage } = require("../support/pages/dashboard.page");

describe('Access Admin Painel', () => {
  beforeEach(() => {
    //cy.visit("/wp-admin")
    cy.login(data.usuario, data.senha)
  });

  it('I should login with valid credentials', () => {
    //LoginPage.login(data.usuario, data.senha)
    dashbordPage.siteName.should("be.visible")
  });
});