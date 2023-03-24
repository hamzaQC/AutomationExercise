const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    emailDomain: "example.com",

    baseUrl:"http://automationexercise.com/",
    email: "testing890@gmail.com",
    password: "Password123",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: [
      '**/POM/*'
     ] ,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
