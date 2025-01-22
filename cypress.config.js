const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      const environment = config.env.environment || 'qa'; 
      const envConfigPath = path.resolve(__dirname, 'cypress.env.json');
      const envConfig = JSON.parse(fs.readFileSync(envConfigPath, 'utf8'));
      const baseUrl = envConfig[environment]?.baseUrl;
      if (baseUrl) {
        config.baseUrl = baseUrl;
      } else {
        console.error(`Base URL not found for environment: ${environment}`);
      }

      return config;
    },
    specPattern: 'cypress/integration/**/*.spec.js',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },
});
