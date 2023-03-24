import Registers from '../POM/Registers';

describe('Register', () => {
    it('Registering a User', () => {
        const obj = new Registers()

        let url = Cypress.config().baseUrl; 

        cy.visit(url); 
        
        cy.title().should('eq','Automation Exercise')

        obj.ClickonRegisterButoon()
        obj.Name('test')
        obj.Email()
        obj.Submit()
        obj.Checkbox()
        obj.Password('Password123')
        obj.SelectADay()
        obj.SelectAMonth()
        obj.SelectAYear()
        obj.Newsletter()
        obj.SpecialOffers()
        obj.FirstName('testing')
        obj.LastName('methew')
        obj.Company('Devsinc')
        obj.Address('Bhatta chowk DHA lahore')
        obj.Country()
        obj.State('Pakistan')
        obj.City('Lahore')
        obj.ZipCode('54950')
        obj.PhoneNumber('03214568486')
        obj.CreateAccountAndContinue()
        obj.DeleteAccountAndContinue()
    })
})
