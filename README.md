# Cypress
This includes my learning and notes on cypress

Cheat Sheet :

https://chercher.tech/cypress-io/cheat-sheet-cypress-io#

Running on different env :

https://ahmed-alsaab.medium.com/configuring-cypress-to-run-on-different-environments-7ae323bb3c86

Cucumber preprocessor :

https://github.com/TheBrainFamily/cypress-cucumber-preprocessor

- You can write function in 2 ways 
  
Given('When the user visits the ecommerce page'), function() {
  cy.visit(Cypress.env('url'))
}

Given('When the user visits the ecommerce page'), () => {
  cy.visit(Cypress.env('url'))
}

-- Example from Cypress Team

https://example.cypress.io/