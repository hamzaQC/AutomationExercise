
class AlreadyRegistered{
    ClickonRegisterButoon(){
        const button= cy.get(':nth-child(4) > a > .fa', {timeout:2000})
        button.click({force: true})
        cy.get('.signup-form > h2')
          .should('have.text', 'New User Signup!')
        }
        Name(value){
            const field=cy.get('[data-qa="signup-name"]', {timeout:2000})
            field.clear()
            field.type(value)
            return this
        }
    
        Email(value){
          const field=cy.get('[data-qa="signup-email"]', {timeout:2000})
          field.clear()
          field.type(value).should('have.text', '')
          return this
        }
        SubmiAndVerifyError(){
            const button = cy.get('[data-qa="signup-button"]')
            button.click()
            cy.get('.signup-form > form > p')
            .should('have.text','Email Address already exist!')
           }
}
export default AlreadyRegistered