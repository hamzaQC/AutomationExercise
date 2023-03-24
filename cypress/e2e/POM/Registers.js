import { should } from "chai"
import { select } from "xpath"

class Registers {

    ClickonRegisterButoon(){
    const button= cy.get(':nth-child(4) > a > .fa', {timeout:2000})
    button.click({force: true})
    cy.get('.signup-form > h2')
      .should('have.text', 'New User Signup!')
    }
  
    Name(value){
        const field=cy.get('[data-qa="signup-name"]', {timeout:2000})
        field.clear()
        field.type(value).should('have.text','')
        return this
    }

    Email(){
      const email = `user_${Math.floor(Math.random() * 100000)}@${Cypress.config('emailDomain')}`;
      const field=cy.get('[data-qa="signup-email"]', {timeout:2000})
      field.clear()
      field.type(email)
      return this
    }

    Submit(){
     const button = cy.get('[data-qa="signup-button"]')
     button.click()
    }

    Checkbox(){
      cy.get(':nth-child(1) > b')
      .should('have.text', 'Enter Account Information')
      const button= cy.get('#id_gender2')
      button.check()
    }
    Password(value){
      const field =cy.get('[data-qa="password"]')
      field.clear()
      field.type(value)
      return this
    }
    SelectADay(){
      const button = cy.get('[data-qa="days"]')
      button.select('5')
    }
    SelectAMonth(){
      const button = cy.get('[data-qa="months"]')
      button.select('5')
    }
    SelectAYear(){
      const button= cy.get('[data-qa="years"]')
      button.select('2003')
    }
    Newsletter(){
      const box= cy.get('#newsletter')
      box.check();
    }
    SpecialOffers(){
      const option= cy.get('#optin')
      option.check()
    }
    FirstName(value){
      const field=cy.get('[data-qa="first_name"]')
      field.clear()
      field.type(value)
      return this
    }
    LastName(value){
      const field=cy.get('[data-qa="last_name"]')
      field.clear()
      field.type(value)
      return this
    }
    Company(value){
      const field=cy.get('[data-qa="company"]')
      field.clear()
      field.type(value)
      return this
    }
    Address(value){
      const field =cy.get('[data-qa="address"]')
      field.clear()
      field.type(value)
      return this 
    }
    Country(){
      const selector = cy.get('[data-qa="country"]')
      selector.select('India')
    }
    State(value){
      const field =cy.get('[data-qa="state"]')
      field.type(value)
      return this 
    }
    City(value){
      const field =cy.get('[data-qa="city"]')
      field.type(value)
      return this 
    }
    ZipCode(value){
      const field =cy.get('[data-qa="zipcode"]')
      field.type(value)
      return this 
    }
    PhoneNumber(value){
      const field =cy.get('[data-qa="mobile_number"]')
      field.type(value)
      return this 
    }
    CreateAccountAndContinue(){
      const button = cy.get('[data-qa="create-account"]')
      button.click()
      cy.get('b', {timeout:'3000'})
      .should('have.text', 'Account Created!')
      const button2 = cy.get('[data-qa="continue-button"]')
      button2.click()
    }
    DeleteAccountAndContinue(){
      const button =cy.get(':nth-child(5) > a > .fa')
      button.click()
      cy.get('b')
      .should('have.text','Account Deleted!')
      const button2=cy.get('[data-qa="continue-button"]')
      button2.click()
    }
  }
  export default Registers