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

describe("Check 2 social networks login", ()=> {
    beforeEach(() => {
        cy.visit('https://medium.com/');
        cy.wait(8000);
        cy.contains("Sign in").click();
        cy.wait(1000);
    })

    it("Twitter login", () => {
        cy.contains("Sign in with Twitter").click();
        cy.wait(3000)
        cy.origin('https://api.twitter.com', () => {
            cy.contains("Twitter")
        })
    });

    it("Google login", () => {
        cy.contains("Sign in with Google").click();
        cy.wait(3000)
        cy.origin('https://accounts.google.com', () => {
            cy.get("#logo").click()
        })
        cy.origin('https://www.google.com', () => {
            cy.contains("Google");
        })
    });

    



})