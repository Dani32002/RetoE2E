describe("Contrast checker inputs", () => {
    beforeEach(() => {
        cy.visit("https://webaim.org/resources/contrastchecker/");
    });

    it("Services Tab", () => {
        cy.contains("Services").click()
        cy.url().should('eq', 'https://webaim.org/services/')
    })

    it("Articles Tab", () => {
        cy.contains("Articles").click()
        cy.url().should('eq', 'https://webaim.org/articles/')
    })

    it("Resources Tab", () => {
        cy.contains("Resources").click()
        cy.url().should('eq', 'https://webaim.org/resources/')
    })

    it("Projects Tab", () => {
        cy.contains("Projects").click()
        cy.url().should('eq', 'https://webaim.org/projects/')
    })

    it("Community Tab", () => {
        cy.contains("Community").click()
        cy.url().should('eq', 'https://webaim.org/community/')
    })

    
});