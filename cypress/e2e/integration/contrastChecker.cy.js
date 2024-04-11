describe("Contrast checker inputs", () => {
    beforeEach(() => {
        cy.visit("https://webaim.org/resources/contrastchecker/");
    });

    it("Valid Values", () => {
        cy.get('input#Hex1').clear().type("FFFFFF");
        cy.get('input#Hex0').clear().type("121212").blur();
        cy.wait(2000);
        cy.get("#ratio").get('b').should('have.text', '18.73');
    })

    it("Invalid Values", () => {
        cy.get('input#Hex1').clear().type("$$$$$$").blur();
        cy.wait(2000);
        cy.get('#Err1').contains('Please enter a valid')
    })
});