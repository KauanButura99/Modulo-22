import 'cypress-plugin-xhr-toggle'

import './commands'

Cypress.on('window:before:load', window => { // Jeito de fechar qualquer pop up ou aviso na tela web 
  const today = new Date()
  window.document.cookie = `OptanonAlertBoxClossed=${today.toISOString}`
  // deve-se setar o cookie desejado
})

