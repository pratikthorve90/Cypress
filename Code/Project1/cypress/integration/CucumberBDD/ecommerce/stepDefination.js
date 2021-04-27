/// <reference types="Cypress" />

import HomePage from "../../../support/pageObjects/HomePage"
import Shop from "../../../support/pageObjects/Shop"
import CheckoutPage from "../../../support/pageObjects/CheckoutPage"
import DeliveryPage from "../../../support/pageObjects/DeliveryPage"

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homePage = new HomePage()
const shop = new Shop()
const checkOutPage = new CheckoutPage()
const deliveryPage = new DeliveryPage()
let inputData   // declare global variables

Given('The user visits the ecommerce page', function(){
  cy.visit(Cypress.env('url')) 
  cy.log(this.data.name)
})

When('we add items to cart' , function() {
  cy.get(':nth-child(2) > .nav-link').click()
  cy.selectProduct(this.data.phone)
  shop.getCheckOut().click()
})

And('Validate the total price' , function() {
  var sum = 0
  cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
     
   
    const amount=$el.text()
    cy.log(amount)
    var res= amount.split(" ")
    cy.log(amount)
     res= res[1].trim()
     sum= Number(sum)+Number(res)
     
  })
  cy.log(sum)
})

And('Clicks submit', function(){
  checkOutPage.getCheckOutButton().click()
  deliveryPage.getCountryField().type(this.data.country)
  deliveryPage.getCountryDropDownList().click()
  deliveryPage.getTermsAndCondition().click({force: true})
  deliveryPage.getPurchaseButton().click()
})

Then('Validate the thank you message' , function(){

  deliveryPage.getAlertText().then(function(alertText) {      
    cy.log(alertText.text())
    expect(alertText.text().includes('Success')).to.true  
})
})

//And Enter the required details for registrations
// rawTable converts the incoming data in a multi dimensional array
And('Enter the required details for registrations', function(dataTable) {

  inputData = dataTable.rawTable
  cy.get(':nth-child(1) > .form-control').type(inputData[1][0]).debug()
  cy.get(':nth-child(2) > .form-control').type(this.data.email) 
  cy.get('#exampleInputPassword1').type(this.data.password)

  if(this.data.icecream === true){
    cy.get('#exampleCheck1').check()
  }

  cy.get('#exampleFormControlSelect1').select(dataTable.rawTable[1][1])
  cy.get('#inlineRadio1').check()  
  cy.get(':nth-child(8) > .form-control').type(this.data.dob)

})

//Then Validate the page Behaviour
Then('Validate the page Behaviour' ,function() {
     // Validate 2 way binding , that text you entered is same as text replicated in other block    
     const text = cy.get(':nth-child(1) > .form-control').invoke('val').then(function(text) {
       this.name = text
       cy.log(text)
     })
 
     cy.get(':nth-child(4) > .ng-untouched').should('have.value',inputData[1][0])
     cy.get(':nth-child(4) > .ng-untouched').invoke('val').then(function(currentValue){
       expect(currentValue).to.equal(inputData[1][0])
     })
 
     // Validate that minlength attribute for the text box is defined as 2
     cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
 
     // Check that the element is disabled 
     cy.get('#inlineRadio3').should('be.disabled')
})

//And submit the page and validate the registration

And('submit the page and validate the registration', function() {
  cy.get('.btn').click()
  cy.get('.alert').should('have.value','Success! The Form has been submitted successfully!.')
})
