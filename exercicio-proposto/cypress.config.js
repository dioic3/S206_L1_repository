const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.baseUrl = process.env.BASEURL
      config.env.firstNamePage = process.env.FIRSTNAMEPAGE
      config.env.lastNamePage = process.env.LASTNAMEPAGE
      config.env.primaryEmail = process.env.PRIMARY_EMAIL
      config.env.primaryNumber = process.env.PRIMARY_NUMBER
      return config
    },
  },
});
