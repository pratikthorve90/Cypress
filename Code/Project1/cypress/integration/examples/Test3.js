/// <reference types="Cypress" />

describe('This is Test Suite 3', function() {


  it('Handling Web Elements ', function() {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check()
    cy.get('#checkBoxOption1').should('be.checked')
    cy.get('#checkBoxOption1').should('have.value','option1')

    // we can also chain them as
    cy.get('#checkBoxOption2').check().should('be.checked').should('have.value','option2')

    // un check
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    // Check multiple checkbox , find a locator that is common for all check box

    cy.get('input[type="checkbox"]').check(['option1','option2','option3'])

    // Static Dropdown , Select by value defined in the html tag
    cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

    // Dynamic dropdown , its difficult where we need to iterate on all the options , compare with our required value and then do the same.

    cy.get('#autocomplete').type('ind')
    // here ui-menu-item is the parent element and under that there is div tag which has the value
    // $element.text().includes('India') this fails at it also matches british indian ocean territory
    cy.get('.ui-menu-item div').each(($element, index, $list) => {
        if($element.text() === 'India')     
        {
          cy.wrap($element).click()
        }
    })

    cy.get('#autocomplete').should('have.value','India')
    

    // Check for visible and in visible elements

    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')

    // Radio Button

    cy.get('#radio-btn-example label input').each(($element, index, $list) => {
      cy.log($element.text())
      if($element.text().includes('Radio2'))
      {
        cy.wrap($element).click()
      }
    })

    cy.get('[value="radio2"]').check().should('be.checked')


  })





})