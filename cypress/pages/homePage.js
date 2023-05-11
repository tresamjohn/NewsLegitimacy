import HomePageElements from '../support/PageObjects/HomePage';


const homePageElements = new HomePageElements();
let testData

before(function () {
    cy.log("Reading test data");
    cy.fixture("TestData\\homePageData").then(
        (data) => {
            testData = data;
        }
    );
});



class HomePage {

    acceptCookieConsent(){
        cy.getIframe('iframe[title="The Guardian consent message"]').then(($iframe) => {
            //cy.frameLoaded('iframe[class="aut-iframe"]')
            const doc = $iframe.contents()
            doc.find('button[title="Yes, I’m happy"]').click();
        });    
    }

    getNewsDisplayed(){
        homePageElements.listed_news().invoke('text').then(value => {
        cy.writeFile('cypress/fixtures/TestData/googleNewsPageData.json', { newsTitle: value})
        });
    }


}
export default HomePage;