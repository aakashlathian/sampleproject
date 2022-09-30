class LoginPage{

    getEmail(){
        return cy.get('#Email')
    }

    getPassword(){
        return cy.get('#Password')
    }

    Loginbtn(){
        return cy.get('button[class="button-1 login-button"]')
    }

}

export default LoginPage;