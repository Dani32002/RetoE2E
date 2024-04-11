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

describe("Testing El Tiempo login", ()=> {
    beforeEach(() => {
        cy.visit('https://www.eltiempo.com/login');
        cy.wait(8000);
    })

    it("Entering with invalid credentials", () => {
        getIframeBody("iframe_login").find("#username").type("emailInvalido");
        getIframeBody("iframe_login").find("#password").type("passwordInvalido");
        getIframeBody("iframe_login").find("#submitbutton").click();
        cy.wait(10000)
        getIframeBody("iframe_login").find(".error-1.gaLoginFail").contains("El correo electrónico y/o contraseña no son correctos. Por favor vuelve a intentarlo. ");
    })

    it("Entering with valid credentials", () => {
        getIframeBody("iframe_login").find("#username").type("escape0466@gmail.com");
        getIframeBody("iframe_login").find("#password").type("probando123");
        getIframeBody("iframe_login").find("#submitbutton").click();
        cy.wait(30000)
        cy.url().should('eq', 'https://www.eltiempo.com/login')
    })



})