const { defineConfig } = require ('cypress')
module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true,
  },

e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: '**/integration/Feature_file/*.feature',
    baseUrl: "https://www.demoblaze.com",
    "supportFile": false,
    chromeWebSecurity: false
    },
})