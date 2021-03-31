/// <reference types="Cypress" />


describe("This is framework 1", function() {
  
  beforeEach(function() {

    // Load the fixture , resolve the promise , declare a class level variable so that every-other TC can use it
    cy.fixture('example.json').then(function(data) {
      this.data = data
    })

    cy.visit('https://rahulshettyacademy.com/angularpractice/')

  })

  it("TC01 : Register User" , function() {

    cy.get(':nth-child(1) > .form-control').type(this.data.name)
    cy.get(':nth-child(2) > .form-control').type(this.data.email) 
    cy.get('#exampleInputPassword1').type(this.data.password)

    if(this.data.icecream === true){
      cy.get('#exampleCheck1').check()
    }

    cy.get('#exampleFormControlSelect1').select(this.data.gender)
    cy.get('#inlineRadio1').check()
    
    cy.get(':nth-child(8) > .form-control').type(this.data.dob)

  })

  it('More Validations', function(){

    // Validate 2 way binding , that text you entered is same as text replicated in other block
    cy.get(':nth-child(1) > .form-control').type('Malhar')
    const text = cy.get(':nth-child(1) > .form-control').invoke('val').then(function(text) {
      this.name = text
      cy.log(text)
    })

    cy.get(':nth-child(4) > .ng-untouched').should('have.value','Malhar')
    cy.get(':nth-child(4) > .ng-untouched').invoke('val').then(function(currentValue){
      expect(currentValue).to.equal('Malhar')
    })

    // Validate that minlength attribute for the text box is defined as 2
    cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')

    // Check that the element is disabled 
    cy.get('#inlineRadio3').should('be.disabled')


  })

  it('Add Products to cart based on text', function() {
    cy.get(':nth-child(2) > .nav-link').click()

    cy.selectProduct('Blackberry')

    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

  })  

})