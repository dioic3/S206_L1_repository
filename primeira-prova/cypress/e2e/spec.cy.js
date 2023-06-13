import pageObjects from "../support/pageObjects/pageObjects";
const UI = new pageObjects;

describe('Cenário: validando o dashboard', () => {
  it('Caso: verificando se entrou na página e validando a home page.', () => {
      UI.visit();
      UI.validationHome();
  });
  it('Caso: Adicionando um produto ao carrinho', () => {
    
  });
});