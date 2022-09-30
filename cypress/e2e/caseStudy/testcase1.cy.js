
import HomePage from './pageObject/HomePage'
import RegistorPage from './pageObject/RegistorPage'
describe('registration', () => {
  
const homepage = new HomePage()
const registorpage = new RegistorPage()
  it('click on registration button', () => {
    
    cy.visit("https://demo.nopcommerce.com/")
    homepage.Registorbtn().click()
    
  })

  it('select gender', () => {
    registorpage.getGender().check().should('be.checked')
    
  })

  it('enter first name', () => {
    registorpage.getfirstname().type('aakash')
    
  })

  it('enter last name', () => {
    registorpage.getlastname().type('lathian')
    
  })

  it('enter email', () => {
    registorpage.getEmail().type('akash17898@gmail.com')
    
  })

  it('enter company name', () => {
    registorpage.getCompanyName().type('mindtree')
    
  })

  it('enter password', () => {
    registorpage.getPassword().type('12345')

    registorpage.getConfirmPassword().type('12345')

    expect('12345').to.equal('12345')
    
  })

  it('click on register ', () => {
    registorpage.getRegitorbtn().click()

  })


})