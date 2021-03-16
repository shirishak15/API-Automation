API-Automation
Files:
1. Config file : conf-api.js - Contains Run configurations, framework used(Jasmine) and the Spec files.
2. Spec file : API-Automation.js - Contains all the REST API methods with implementations for performing GET, POST, PUT, DELETE methods.
3. API-Resources(index, Prototype, requestHandler) - Protractor libraries to facilitate REST API calls.
	
Running the tests:
1. The execution of API calls happens internally.
2. To execute, Open command prompt in project's root folder and run the below commands(excluding quotes):
      'npm install'
      'npm i request-promise'.
      'npm i protractor-api-resource'
      'protractor ./Config/conf-api.js' 
3. The scripts will run and the execution logs can be seen in the terminal for all REST API methods.
4. There is a Run file placed in the project Root folder(Run-API.bat), double clicking on which will run our test scripts


Note:
Assertions and Validation steps are placed at necessary areas within the code so that the script shall fail incase of unexpected output.

