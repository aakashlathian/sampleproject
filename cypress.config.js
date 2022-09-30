const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'syo97m',
  reporter: 'mochawesome',
  //testFiles: "**/*.feature",


  e2e: {
    

    setupNodeEvents(on, config) {
      // implement node event listeners here
      //baseUrl: 'http://localhost:1234'

      //on('file:preprocessor', cucumber())

      
    },
  },
});


