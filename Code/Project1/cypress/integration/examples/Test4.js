/// <reference types="Cypress" />

describe("This is Test Suite 4", function () {

  it("Handling Alerts , ", function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // Alert handling , this is ALERT so this auto closed by cypress
    cy.get('#alertbtn').click()

    // Alert  with CONFIRM options
    cy.get('#confirmbtn').click()

    // Listen to browser events to get the Alert Text
    cy.get('#alertbtn').click()

    cy.on('window:alert',(str) => { expect(str).to.equal('Hello , share this practice page and share your knowledge')})

    cy.on('window:confirm',(str) => { expect(str).to.equal('Hello , share this practice page and share your knowledge')})

  })

  it('Handling child windows / tabs ' , function() {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#opentab').invoke('removeAttr','target').click()

    // cy.url().should('include','qaclickacademy')

    cy.go('back')

    // cy.url().should('include','rahulshettyacademy')

    cy.go('forward')

    // cy.url().should('include','qaclickacademy')



  })


})