/// <reference types="cypress" />
import Login from "../../page-objetcs/login/login";
import visit from "../../page-objetcs/visit/visit";
const UI = new Login;
const Login = new visit;

describe('Cenário: Login com usuário certo', () => {
    it('Caso: visitando o site', () => {
        Login.visit();
    });
});