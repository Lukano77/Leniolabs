const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://www.saucedemo.com",
    fixturesFolder:'cypress/e2e',
    watchForFileChanges:false,
    defaultCommandTimeout:1000,
    experimentalSessionAndOrigin: true,
    failOnStatusCode: false,
    chromeWebSecurity:false
  },
  env:{
    username:"standard_user",
    password:"secret_sauce"
    }
});
