describe("Contrast checker inputs", () => {
    beforeEach(() => {
        cy.visit("https://webaim.org/");
    });

    it("Search with results", () => {
        cy.get('input#q').type('contrast{enter}')
        cy.contains("No search results found.").should('not.exist')
    })

    it("Search with no results", () => {
        cy.get('input#q').type('fwegfrgreg{enter}')
        cy.contains("No search results found.")
    })
});