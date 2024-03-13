/// <reference types='cypress' />

Cypress.Commands.add('login', (user, pass) => {
  const fd = new FormData()

  fd.append('log', user)
  fd.append('pwd', pass)
  fd.append('wp-submit', 'Acessar')
  fd.append('redirect_to', `/wp-admin`)
  fd.append('testcookie', 1)

  cy.request({
    url: `/wp-login.php`,
    method: "POST",
    body: fd
  }).then((resp) => {
    resp.headers['set-cookie'].forEach(cookie => {
      const firstPart = cookie.split(';')[0]
      const separator = firstPart.indexOf('=')
      const name = firstPart.substring(0, separator)
      const value = firstPart.substring(separator + 1)
      cy.setCookie(name, value)
    })
  })

  cy.visit("/wp-admin")
});

Cypress.Commands.add('goToCheckoutPage', () => {
  cy.get('.top-cart-wishlist').click()
  cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
});

Cypress.Commands.add('addProduct', () => {
  const fd = new FormData()
  fd.append('atribute_size', '32')
  fd.append('atribute_color', 'Blue')
  fd.append('quantity', 1)
  fd.append('add-to-cart', 3019)
  fd.append('product_id', 3019)
  fd.append('variation_id', 3020)

  cy.request({
    url: `/product/zeppelin-yoga-pant/`,
    method: "POST",
    body: fd
  }).then((resp) => {
    resp.headers['set-cookie'].forEach(cookie => {
      const firstPart = cookie.split(';')[0]
      const separator = firstPart.indexOf('=')
      const name = firstPart.substring(0, separator)
      const value = firstPart.substring(separator + 1)
      cy.setCookie(name, value)
    })

    cy.visit('/product/zeppelin-yoga-pant/')
  });
})