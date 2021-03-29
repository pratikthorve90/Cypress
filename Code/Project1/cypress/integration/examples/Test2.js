/// <reference types="Cypress" />


describe("This is test suite 2", function(){

  it('This is complete TC : Including checkout', function(){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

          cy.get('.products').as('productLocator')
          cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            cy.log($el.text())
            if($el.find('h4.product-name').text().includes('Cashews'))
            {
              cy.wrap($el).find('button').click()
            }
            })    
    cy.get('.cart-icon > img').click()   
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()

  })

})