// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-iframe';

Cypress.Commands.add('openGuardianNewsApplication', () => {
    cy.visit({
     url: 'https://www.theguardian.com/tone/news/',
   })
 })
 
 Cypress.Commands.add('openGoogleNewsApplication', () => {
  Cypress.Cookies.debug(false);
  
  cy.visit({
   url: 'https://news.google.com/news'
 })
})

 Cypress.Commands.add('setViewPort', () => {
     cy.viewport(1280, 768)
 })
 
 Cypress.Commands.add('getIframe', (iframe) => {
  return cy.get(iframe)
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);
})