# Cypress Cucumber BDD POM Framework


## This framework includes:
- Cucumber - testing tool that supports Behavior Driven Development (BDD).
- BDD (Behaviour Driven Development) concepts
- Gherkin - Gherkin is Cucumber's language parser, which allows software behaviours to be specified in a logical language that people can understand.
- Used Cypress plugins:
         cypress-cucumber-preprocessor - To integrate cucumber
         xpath - to use xpath to locate elements


## Scenarios covered:
1. Open Guardians News Web application and get the news to be verified.

2. Verify that news displayed in Guardian website is valid or not, via Google News.

3. Verify that Guardian news is valid or not, via Google News by applying Date Posted Filter.
    


## How to access

git clone 


## An outline about the Folders and files

_smokeSuite Folder_
1. smokeSuite.feature --> Feature file where scenarios are described.
2. smokeSuite_stepDefinition.js --> Step Definition file

_fixtures_ Folder_
1. This folder is created to add and maintain testdata according to the pages.

_pages_
1. This folder is created to add and maintain each pages in the page object model. functions used in the step definition file are written in these files.

_PageObjects_
1. The element locators are added in this folder according to the pages.

_Command.js_
1. The commonly used functions/commands are added here, example setting the browser view size.



## Kindly Note:
If you find difficulty in understanding the framework or accessing the same, feel free to get in touch: tresamjohn@gmail.com
Thank you for your time!


