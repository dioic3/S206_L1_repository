const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.env.baseUrl = process.env.BASEURL
      config.env.firstNamePage = process.env.FIRSTNAMEPAGE
      config.env.lastNamePage = process.env.LASTNAMEPAGE
      config.env.primaryEmail = process.env.PRIMARY_EMAIL
      config.env.primaryNumber = process.env.PRIMARY_NUMBER
      return config
    },
  },
});
