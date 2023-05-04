const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.baseurl = process.env.BASE_URL
      return config
    },
  },
});
