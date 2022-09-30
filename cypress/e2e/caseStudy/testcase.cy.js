describe('empty spec', () => {
  it('go to url', () => {
    cy.visit('https://demo.nopcommerce.com/')
  })

  it('search and click', () => {
    cy.get('input[id="small-searchterms"]').type('shoes').should('have.value','shoes')
    cy.get('button[type="submit"]').click()
    
  })


  it('add to cart', () => {
    
    cy.get('.item-grid').find('.item-box').each((e, index, $list)=> {
      //const item = $el.find('h2.product-title').text()
      
      
      if (index == 0){
        e.find('button[type="button"]').eq(0)
        cy.wrap(e).click() 
      }
      
   })

   cy.get('#product_enteredQuantity_24').clear().type('2')
   cy.get('#product_attribute_6').select('14').should('have.value','14')
   cy.get('#product_attribute_7').select('17').should('have.value','17')

   cy.get('#product_attribute_8_19').click({force: true})
   cy.wait(4000)
   
   cy.get('button[id="add-to-cart-button-24"]').click()

   cy.get('.cart-label').click()
   var sum = 0
   cy.get('.product-unit-price').then(function(element){
    const actualText = element.text()
    var result = actualText.split("$")
    result = result[1].trim()
    //cy.log(result)
    
    sum = Number(result)*2
    
  
 }).then(function(){
  cy.log(sum)
 })

 cy.get('.product-subtotal').then(function(element){
  const actualText = element.text()
  var result = actualText.split("$")
  result = result[1].trim()
  cy.log(result)
  var total = result
  expect(Number(total)).to.equal(Number(sum))
  

})

   
   

   
    
  })

 // it('click of wishlist', () => {
  
 //   cy.get('.wishlist-label').click()
    
  //})
})