import HomePage from './pageObject/HomePage'
import LoginPage from './pageObject/LoginPage'

describe('empty spec', () => {

  const homepage = new HomePage()
  const loginpage = new LoginPage()
  let testData;
  before(function(){
   cy.visit('https://demo.nopcommerce.com/')
   cy.fixture('example').then(function(data){
      testData = data
    })
  })

  it('go to url', () => {
    
  })

  it('click on login ', () => {
    homepage.lolginbtn().click()

  })

  it('enter email', function () {
    loginpage.getEmail().type(testData.email)

  })

  it('enter password', function () {
    loginpage.getPassword().type(testData.password)
    console.log(testData.password);


  }) 
  
  it('click login button', () => {
   loginpage.Loginbtn().click()

  })


})