import register from "../../elements/register/register";
const UI = new register;

class Register {
    firstName(){
        cy.get(UI.firstName()).type(Cypress.env('firstName'))
    }
    lastName(){
        cy.get(UI.lastName()).type(Cypress.env('lasName'))
    }
    userName(){
        cy.get(UI.userName()).type(Cypress.env('username'))
    }
    password(){
        cy.get(UI.password()).type(Cypress.env('password'))
    }
}
export default Register;