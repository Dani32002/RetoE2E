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

describe("Testing field validation El Tiempo", ()=> {
    beforeEach(() => {
        cy.visit('https://www.eltiempo.com/zona-usuario/crear#defaultLogin');
        cy.wait(8000);
    })

    it("Inputing data", () => {
        getIframeBody("iframe_registro").find("#first_name").type("Pepito")
        getIframeBody("iframe_registro").find("#last_name").type("Perez")
        getIframeBody("iframe_registro").find("#submitbutton").click();
        cy.wait(2000)
        getIframeBody("iframe_registro").find(".error-1").then(($divs)=>{
            expect($divs.length).to.equal(6)
        })

    });

    it("Leaving empty data", () => {
        getIframeBody("iframe_registro").find("#submitbutton").click();
        cy.wait(2000)
        getIframeBody("iframe_registro").find(".error-1").then(($divs)=>{
            expect($divs.length).to.equal(8)
        })

    });

    



})