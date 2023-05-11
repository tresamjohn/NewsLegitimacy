import HomePage from '../../../pages/HomePage';
import GoogleNewsPage from "../../../pages/googleNewsPage";

const homePage = new HomePage();
const googleNewsPage = new GoogleNewsPage();


Given("a web browser is at the Guardian's News Application's homepage", () => {
  cy.openGuardianNewsApplication();
  cy.setViewPort();
});

When("the user 'accept' the cookies - Guardian consent message", (content) => {
  homePage.acceptCookieConsent();
  })

Then("get the first news in the list", (content) => {
  homePage.getNewsDisplayed();
  })

And("a web browser is at the Google News application's page", () => {
  cy.openGoogleNewsApplication();
  cy.setViewPort(); 
  googleNewsPage.acceptGoogleCookieConsent();
  })
    
When("user enter news title and search the news", () => {
  googleNewsPage.searchBar_searchNews();
  googleNewsPage.searchNews_clickOnButton();
  })

Then("verify that news is legitimate", () => {
  googleNewsPage.verify_newsIsValid();
  })

Then("apply Advance Search Filter as posted with in {string} time", (content) => {
    googleNewsPage.openGoogleAdvanceSearch();
    cy.contains(content).click();
    googleNewsPage.clickOnFilterSearchBtn();
    })
