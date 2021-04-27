// This is before each , this will load for all the test 
// if we don`t want that we can just use before
beforeEach(function() {
      // Load the fixture , resolve the promise , declare a class level variable so that every-other TC can use it
      cy.fixture('example.json').then(function(data) {
        this.data = data
      })      
})