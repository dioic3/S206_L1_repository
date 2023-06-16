import pageObjects from "../support/pageObjects/pageObjects";
const UI = new pageObjects;

describe('Cenário: validando o dashboard', () => {
  it.skip('Caso: verificando se entrou na página e validando a home page.', () => {
      UI.visit();
      UI.validationHome();
  });
  it.skip('Caso: Adicionando um produto ao carrinho', () => {
      UI.visit();
      UI.clickProduct();
      cy.intercept('POST','**https://api.demoblaze.com/addtocart**').as('intercept')
      UI.validationMessage();
      UI.addToCard();
      cy.wait('@intercept')
  });

  it('Caso: validando se pede senha do usuário ao fazer login', () => {
    UI.visit();
    UI.loginButton();
    UI.writeInformations();
    UI.alert();
  });
});