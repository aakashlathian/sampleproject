describe('my first test scute', function() {
  it('my first test case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  })

  it('search item', () => {
    cy.get("input[class='search-keyword']").type("ca").click()
    cy.wait(3000)
  })

  it('add to cart', () => {
    cy.get("div[class='products']").find("div[class='product']").each(($el, index, $list) =>{
    const textveg = $el.find('h4.product-name').text()
      if(textveg.includes('cashews')){
        //const x = $el.find('button')
        $el.contents('ADD TO CART').trigger('click')
      }
    })

  })

})