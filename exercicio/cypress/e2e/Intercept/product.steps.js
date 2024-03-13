/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const { produtosPage } = require('../../support/pages/index')
const dados = require('../../fixtures/productResponse.json')
const produtos = require('../../fixture/product.json')
let htmlResponse

beforeEach(() => {
    cy.readFile("cypress/response/add.html").then(html=>{
      htmlResponse = html
    })
    cy.visit("/")
  })

Given('Eu acesse a página de produtos', () => {
    cy.visit('/produtos')
})

When('Eu adiciono produto no carrinho', () => {
    
    cy.intercept({
        url: '/wp-admin/admin-ajax*',
        method: 'POST',                 
    }, req => {
        if(req.headers.cookie.includes("woocommerce_items_in_cart=1")){
            req.reply({
                statusCode: 200,
                body: dados.response
            })
        }        
    }).as('admin-ajax') 

    cy.intercept({
        method: 'POST',
        url: '/?wc-ajax=get_refreshed_fragments*',         
    }, req => {
                req.reply({
                statusCode: 200,
                body: dados.html
            })
    }).as('fragments')
    
    cy.intercept({
        method: 'POST',
        url: '/product/Ingrid Running janket/',         
    },  req => {
        window.sessionStorage.setItem("wc_fragments_a84fb9b97c9e7516ea041e13a46d5c80", dados.html)     
        req.reply(     
         {     
            statusCode: 200,     
            body: htmlResponse
         })     
       }).as('product')

       produtosPage.addProduct(produtos[1].product, produtos[1].size, 
        produtos[1].color, produtos[1].amount)
})

Then('No carrinho devo ver o produto', () => {
    produtosPage.clicarPreviewCarrinho()
    produtosPage.PreviewCarrinho.should('contain', 'Abominable Hoodie - XS, Green')
})