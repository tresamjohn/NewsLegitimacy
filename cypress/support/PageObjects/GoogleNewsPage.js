class GoogleNewsPageSelectors {

    news_searchBar() {
        cy.wait(2000)
        return cy.get('input[aria-label="Search for topics, locations & sources"]');
    }

    news_searchButton() {
        return cy.get('button[aria-label="Search"]');
    }

    verify_news() {
        cy.wait(2000)
        return cy.get('div[class="xrnccd"]');
    }

    advanceSearch_dropdown() {
        cy.wait(2000)
        return cy.get('button[title="Advanced search"]');
    }

    advanceSearch_combobox() {
        cy.wait(2000)
        return cy.get('div[role="combobox"]');
    }

    select_dateFilterValue(){
        cy.wait(2000)
        return cy.get('span');
    }

    advanceSearch_searchBtn(){
        cy.wait(2000)
        return cy.get('div[aria-label="Search"]');
    }

    accept_consent(){
        cy.wait(2000)
        return cy.xpath('//form[2]//button[@aria-label="Accept all"]');
    }
    

}

export default GoogleNewsPageSelectors