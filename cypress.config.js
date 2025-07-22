const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'qvm6jd',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'chromium') {
          launchOptions.args.push('--disable-web-security')
          launchOptions.args.push('--disable-site-isolation-trials')
        }
        return launchOptions
      })
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
    reporter: 'spec',
  },
})
