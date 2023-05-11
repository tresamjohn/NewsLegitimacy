import MasterPageElements from '../support/PageObjects/MasterPage';

const masterPageElements = new MasterPageElements();

class MasterPage {


    navigateBack() {
        cy.go('back')
    }

    pageReload() {
        cy.reload()
    }

    scrollPageTo(position) {
        cy.scrollTo(position)
    }

    //This function can be used to enter dynamic elements
    getDynamicElement(locator, dynamicString) {
        let newLocator = locator.replace("#", dynamicString)
        return cy.get(newLocator)
    }

    //This function can be used to enter dynamic xpath's
    getDynamicXpath(locator, dynamicString) {
        let newLocator = locator.replace("#", dynamicString)
        return cy.xpath(newLocator)
    }


}
export default MasterPage;