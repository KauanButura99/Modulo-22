const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
  
module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: 'http://your-instance.com:8080/api/v1',
    apiKey: 'reportportalApiKey',
    launch: 'LAUNCH_NAME',
    project: 'PROJECT_NAME',
    description: 'LAUNCH_DESCRIPTION',
    attributes: [
      {
        key: 'attributeKey',
        value: 'attrbiuteValue',
      },
      {
        value: 'anotherAttrbiuteValue',
      },
    ],
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
  },
});
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    specPattern: "cypress/e2e/*.feature",
    setupNodeEvents
  },
});

