const getIframeDocument = (id) => {
    return cy
    .get('#' + id)
    .its('0.contentDocument').should('exist')
  }
  
  const getIframeBody = (id) => {
    return getIframeDocument(id)
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
  }

describe("Testing Driver navigation", () => {
    beforeEach(() => {
        cy.visit("https://www.formula1.com/");
        cy.wait(7000);
        getIframeBody("sp_message_iframe_1101803").find(".message-button").last().click();
        cy.wait(7000);
    });

    it("Driver list", () => {
        cy.get('[class="menu open"]').first().click();
        cy.contains('Drivers').click();
        cy.get(".listing-standing").its('length').should('be.gte', 20);
    });

    it("Hall of fame max verstappen", () => {
        cy.get('[class="menu open"]').first().click();
        cy.contains('Drivers').click();
        cy.wait(5000);
        cy.contains('Verstappen').click({force: true});
        cy.url().should('eq', 'https://www.formula1.com/en/drivers/max-verstappen.html')
    });
});