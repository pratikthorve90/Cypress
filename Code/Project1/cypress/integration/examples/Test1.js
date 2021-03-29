/// <reference types="Cypress" />


describe('My First Test : This is Test Suite', function()
{
  it('TC1 : Does not do anything', function(){
        expect(true).to.equal(false)
      })
  it('TC2 : Learning Assertions', function(){
          cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
          cy.get('.search-keyword').type('ca')
          cy.wait(2000)
          // Assertion to check that 4 products are displayed
          cy.get('.product:visible').should('have.lengthOf',4)

          // Using parent child for exact validation , without using  visible
          cy.get('.products').find('.product').should('have.lengthOf',4)

          // Increase the quantity to 2 Add the second product to cart  and ensure that the text change to ADDED
          cy.get('.products').find('.product').eq(2).find('.increment').click()
          cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
          cy.get('.products').find('.product').eq(2).contains('ADDED')

          // Find the product and check that the text is Carrot and then add it to cart , for this we use EACH method provided by cypress for iteration 
          // $el --> element 
          // index --> represent the index 
          // $list -- > is the complete list of elements
          // For each element the value is copied in $el and passed inside the each block where we can perform the operation

          cy.get('.products').as('productLocator')
          cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            cy.log($el.text())
            if($el.find('h4.product-name').text().includes('Cashews'))
            {
              cy.wrap($el).find('button').click()
            }
            })

            cy.get('.tada')

      })

      it('TC3: Get page title and logo', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        
        cy.get('.brand').then(function(logoElement){
          cy.log(logoElement.text())
        })

        // cy.get('.brand').text()   // this also fails as text() is not a cypress command
      })

      it('TC4: Optimized assertion', function(){

          cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
          cy.get('.search-keyword').type('ca')
          cy.wait(2000)

          // this creates alias for the element and we can use this directly
          // in future so we need to change only 1 place and not everywhere
          cy.get('.products').as('productParentElement')  

          cy.get('@productParentElement').find('.product').should('have.length',4)

          cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
            
          })

          cy.get('.brand').then(function(logoElement){
            console.log(logoElement.text())
          })

          cy.get('.brand').should('have.text','GREENKART1')   // should comes from chai library
      })

      
}
)


