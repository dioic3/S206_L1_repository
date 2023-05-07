import visit from "../support/pageobjects/visit-page/visit";
import Page from "../support/pageobjects/let-me/let-me";
const Login = new visit;
const LetMe = new Page;
describe('Cenário de Teste: verificar a página de login', () => {
  it('Caso: Verificando a página de let me hack!', () => {
    Login.visitPage();
    LetMe.clickButton();
    LetMe.verifyText();
  });

  it('Caso: verificando se o campo de reserva onde o usuário não clicou no calendário', () => {
    Login.visitPage();
    LetMe.clickButton();
    LetMe.room();
    LetMe.completeInformations();
    LetMe.buttonBook();
    LetMe.alert();
  });

  it('Caso: verificando se o botão de cancelar do Booking funciona', () => {
    Login.visitPage();
    LetMe.clickButton();
    LetMe.room();
    LetMe.completeInformations();
    LetMe.cancel();
    LetMe.boxRoom();
  }); 

  it('Caso: verificando o formulatório de dúvidas', () => {
    Login.visitPage();
    LetMe.clickButton();
    LetMe.completeForms();
    LetMe.submitForms();
    LetMe.validateForms();
  });

  it('Caso: verificando campo de mensagem com limite minimo de caracteres', () => {
    Login.visitPage();
    LetMe.clickButton();
    LetMe.valideSmallMessage();
    LetMe.submitForms();
    LetMe.messageForms();
  });

  it('Caso: verificando as informações do lado do formulário', () => {
    Login.visitPage();
    LetMe.clickButton();
    LetMe.informationsOfHotel();
  });
});