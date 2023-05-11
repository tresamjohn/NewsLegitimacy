import GoogleNewsPageElements from '../support/PageObjects/GoogleNewsPage';

const googleNewsPageElements = new GoogleNewsPageElements();
let testData

before(function () {
    cy.log("Reading test data");
    cy.fixture("TestData\\googleNewsPageData").then(
        (data) => {
            testData = data;
        }
    );
});



class GoogleNewsPage {

    acceptGoogleCookieConsent(){
        googleNewsPageElements.accept_consent().click();
    }

    searchBar_searchNews(){
        googleNewsPageElements.news_searchBar().type(testData.newsTitle);
    }

    searchNews_clickOnButton(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        googleNewsPageElements.news_searchButton().click();
    }

    verify_newsIsValid(){
        if(googleNewsPageElements.verify_news().length > 3){
            cy.log("News is Valid")
             }
             else{
            cy.log("News is invalid/fake")
             }   
        }


    openGoogleAdvanceSearch(){
    googleNewsPageElements.advanceSearch_dropdown().click();
    googleNewsPageElements.advanceSearch_combobox().click();
     }


    clickOnFilterSearchBtn(){
    googleNewsPageElements.advanceSearch_searchBtn().click();
    }



}
export default GoogleNewsPage;