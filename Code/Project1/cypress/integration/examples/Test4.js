/// <reference types="Cypress" />

describe("This is Test Suite 4", function () {

  it("Handling Alerts , ", function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // Alert handling , this is ALERT so this auto closed by cypress
    cy.get('#alertbtn').click()

    // Alert , with CONFIRM options
    cy.get('#confirmbtn').click()



  })


})