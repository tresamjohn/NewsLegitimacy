class HomePageSelectors {


    listed_news() {
        return cy.xpath('(//span[@class="js-headline-text"])[3]');
    }



}

export default HomePageSelectors