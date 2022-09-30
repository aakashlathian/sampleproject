class RegistorPage{

    getGender(){
        return cy.get('#gender-male')
    }

    getfirstname(){
        return cy.get('#FirstName')
    }

    getlastname(){
        return cy.get('#LastName')
    }

    getEmail(){
        return cy.get('#Email')
    }
    
    getCompanyName(){
        return cy.get('#Company')
    }
    
    getPassword(){
        return cy.get('#Password')
    }

    getConfirmPassword(){
        return cy.get('#ConfirmPassword')
    }

    getRegitorbtn(){
        return cy.get('#register-button')
    }

}

export default RegistorPage;