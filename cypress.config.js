const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
          const environment = config.env.environment || 'qa';
          const envConfigPath = path.resolve(__dirname, 'cypress.env.json');
          const envConfig = JSON.parse(fs.readFileSync(envConfigPath, 'utf8'));
          const baseUrl = envConfig[environment]?.baseUrl || 'https://adactinhotelapp.com/';
          config.baseUrl = baseUrl;
            if (!envConfig[environment]?.baseUrl) {
              console.error(`Using default baseUrl: ${baseUrl} as no environment-specific URL was found.`);
            }
      return config;
    },
    specPattern: 'cypress/integration/**/*.spec.js',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true, 
    charts: true,
    reportTitle: "Cypress Test Execution Report",
    embeddedScreenshots: true,
  },
});
