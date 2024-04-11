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

describe("Checking login email input field", ()=> {
    beforeEach(() => {
        cy.visit('https://medium.com/');
        cy.wait(8000);
        cy.contains("Sign in").click();
        cy.wait(1000);
        cy.contains("Sign in with email").click();
    })

    it("Inputing registered email", () => {
        cy.get('input').type("escape0466@gmail.com");
        cy.contains("Continue").click();
        cy.contains("Check your inbox.");

    });

    it("Inputing unregistered email", () => {
        cy.get('input').type("escape0466@hotmail.com");
        cy.contains("Continue").click();
        cy.contains("Sorry, we didn't recognize that email.");

    });

    



})