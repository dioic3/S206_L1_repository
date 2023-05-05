const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.baseurl = process.env.BASE_URL
      config.env.Username = process.env.USER_NAME
      config.env.firstName = process.env.FIRST_NAME
      config.env.lastName = process.env.LAST_NAME
      config.env.password = process.env.PASSWORD

      //wrong login
      config.env.wrongUsername = process.env.WRONG_USERNAME
      config.env.wrongPassword = process.env.WRONG_PASSWORD
      return config
    },
  },
});
