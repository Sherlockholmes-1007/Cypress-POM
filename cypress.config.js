const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      const env = config.env.environment || 'qa';
      if (env === 'qa') {
        config.baseUrl = 'https://adactinhotelapp.com/';
      } else if (env === 'staging') {
        config.baseUrl = 'https://testing.maxistime.com';
      } else if (env === 'prod') {
        config.baseUrl = 'https://maxistime.com';
      }
      require('cypress-mochawesome-reporter/plugin')(on);

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
