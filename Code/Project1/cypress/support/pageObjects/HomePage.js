class HomePage {


  getName() {
    return cy.get(':nth-child(1) > .form-control')
  }

  getEmail() {
    return cy.get(':nth-child(2) > .form-control')
  }

  getPassword() {
    return cy.get('#exampleInputPassword1')
  }

  getGender() {
    return cy.get('#exampleFormControlSelect1')
  }

  getDOB() {
    return cy.get(':nth-child(8) > .form-control')
  }

  getEmploymentStatusAsStudent() {
    return cy.get('#inlineRadio1')
  }

  

}

// This will ensure that other can use our class and its available to everyone
// Similar to public access modifiers.

export default  HomePage;
