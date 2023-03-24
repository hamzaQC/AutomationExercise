
class Logouts{

    LogoutTheUser(){
        const button=cy.get(':nth-child(4) > a > .fa')
        button.click()
        cy.url().should('include','/login')
    }

}
export default Logouts