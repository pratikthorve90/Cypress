/// <reference types="Cypress" />

import HomePage from "../../support/pageObjects/HomePage"
import Shop from "../../support/pageObjects/Shop"
import CheckoutPage from "../../support/pageObjects/CheckoutPage"
import DeliveryPage from "../../support/pageObjects/DeliveryPage"



describe("This is framework 1", function() {
  
  beforeEach(function() {

    // Load the fixture , resolve the promise , declare a class level variable so that every-other TC can use it
    cy.fixture('example.json').then(function(data) {
      this.data = data
    })
    cy.visit(Cypress.env('url'))

  })

  it("TC01 : Register User" , function() {

    cy.get(':nth-child(1) > .form-control').type(this.data.name).debug()
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

    this.data.productName.forEach(element => {
      cy.selectProduct(element)
    });    

    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

  })  

  it('Using page object Model : User Registration', function() {

    const homePage = new HomePage()
    homePage.getName().type(this.data.name)
    homePage.getEmail().type(this.data.email)
    homePage.getPassword().type(this.data.password)
    homePage.getGender().select(this.data.gender)
    homePage.getEmploymentStatusAsStudent().check()
    homePage.getDOB().type(this.data.dob)   

  })

  it('Using Function in page object model : Select Product', function() {

    const shop = new Shop()
    const checkOutPage = new CheckoutPage()
    const deliveryPage = new DeliveryPage()
    cy.get(':nth-child(2) > .nav-link').click()

    this.data.productName.forEach(element => {
      shop.selectProduct(element)
    })

    shop.getCheckOut().click()

    // Validate Sum for all products match to the total , dynamic way
    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
       
      const amount=$el.text()
      var res= amount.split(" ")
       res= res[1].trim()
       sum= Number(sum)+Number(res)
       
    })

    cy.log(sum)
    
    checkOutPage.getCheckOutButton().click()
    deliveryPage.getCountryField().type('India')
    deliveryPage.getCountryDropDownList().click()
    deliveryPage.getTermsAndCondition().click({force: true})
    deliveryPage.getPurchaseButton().click()
   
    deliveryPage.getAlertText().then(function(alertText) {      
        cy.log(alertText.text())
        expect(alertText.text().includes('Success')).to.true
      
    })


  })

})