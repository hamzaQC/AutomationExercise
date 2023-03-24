import AlreadyRegistered from "../POM/AlreadyRegistered";

describe('RegisterUser', () => {
    it('Register a User with an Existing Email', () => { 

        const obj = new AlreadyRegistered()
  
        let url = Cypress.config().baseUrl;
  
        cy.visit(url);

        let user = Cypress.config().email;
        
        let pass = Cypress.config().password;
  
        obj.ClickonRegisterButoon()
        obj.Name('test')
        obj.Email('testing890@gmail.com')
        obj.SubmiAndVerifyError()
  
    })
  })
  