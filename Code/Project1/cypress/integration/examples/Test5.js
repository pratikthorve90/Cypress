import "cypress-iframe";


/// <reference types="Cypress" />

describe("This is test suite", function () {

  it('This is handling table elements', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#product').find('tr td:nth-child(2)').each(($e1, index, $list) => {     

      if($e1.text().includes('JMETER'))      {
        
        expect($e1.next().text()).to.equal('25')
      }      
  }) 

  })

  it('Mouse Over Actions', function() {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include','top')

    // Now cypress also possess capability where it can force click on elements , so 
    // if a element is invisible it will bring to to foreground and click on it.
    cy.contains('Reload').click({force: true})
    cy.url().should('not.include','top')

  })

  it('Get HREF Value and visit', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab')
      .invoke('attr', 'href')
      .then(href => {                      // here we need to manually resolve the promise.
        cy.visit(href);
      });


  })

  it('Handling Frames', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe') 
    cy.iframe().find('a[href*="mentorship"]').eq(0).click();
    cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)
    
  })

})