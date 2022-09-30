describe('my first test scute', function() {
  it('my first test case', () => {
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
  })

  it('checkbox', () => {
    cy.get("input[id='checkBoxOption1']").check().should('be.checked').and('have.value','option1')
  
  })

  it('static dropdown', () => {
    cy.get("select[id='dropdown-class-example']").select('Option2').should('have.value','option2')
   
  })

  it('dynamic dropdown', () => {
    cy.get("input[id='autocomplete']").type('ind')
    cy.wait(3000)
    //cy.get('.ui-menu-item div').contains("india").click()
    cy.get('.ui-menu-item div').each(($el,index,$list)=>{
      var country = $el.text()
      cy.log("country name  :",country)
      if(country==='india'){
        cy.wrap($el).trigger("click")
        //$el.click( { force: true }
      }
    })
   
  })

  it('radio button', () => {
    cy.get("input[value='radio2']").check().should('be.checked')
   
  })

  it('Alert', () => {
    cy.get("#alertbtn").click()

    cy.on("window:alert",(str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
   
  })
})