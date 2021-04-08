class Shop{

  selectProduct(productName){
    cy.get('h4.card-title').each(($el, index, $list) => {
      if($el.text().includes(productName))
      {
          cy.get('button.btn.btn-info').eq(index).click()
      }      
      })
  }

  getCheckOut(){
    return cy.contains('Checkout')
  }

}

export default Shop;