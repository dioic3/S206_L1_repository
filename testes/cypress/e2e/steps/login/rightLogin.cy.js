/// <reference types="cypress" />
import Login from "../../page-objetcs/login/login";
import visit from "../../page-objetcs/visit/visit";
const UI = new Login;
const Vis = new visit;

describe('Cenário: Login com usuário certo', () => {
    it('Caso: visitando o site', () => {
        Vis.visit();
    });

    it('Caso: entrando com as informações do usuário', () => {
        Vis.visit();
        cy.intercept('GET','**/angularJs-protractor/registration-login-example/login/login.view.html**').as('index')
        cy.wait('@index')
        UI.UserName();
        UI.PassWord();
        UI.submit();        
    });
});