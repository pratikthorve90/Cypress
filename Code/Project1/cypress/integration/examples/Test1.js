describe('My First Test', function()
{
  it('Does not do anything', function(){
        expect(true).to.equal(false)
      })
  it('Visit Practise Page', function(){
          cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      })
}
)