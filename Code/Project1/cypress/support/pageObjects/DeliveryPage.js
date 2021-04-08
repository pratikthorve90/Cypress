class DeliveryPage{

  getCountryField(){
    return cy.get('#country')
  }

  getTermsAndCondition(){
    return cy.get('#checkbox2')
  }

  getPurchaseButton(){
    return cy.get('form.ng-untouched > .btn')
  }

  getCountryDropDownList(){
    return cy.get('.suggestions > ul > li > a')
  }

  getAlertText(){
    return cy.get('.alert')
  }
}

export default DeliveryPage;