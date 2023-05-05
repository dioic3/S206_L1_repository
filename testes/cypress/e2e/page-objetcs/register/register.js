import register from "../../elements/register/register";
const UI = new register;

class Register {
    firstName(){
        cy.get(UI.firstName()).type(Cypress.env('FIRST_NAME'))
    }
    lastName(){
        cy.get(UI.lastName()).type(Cypress.env('LAST_NAME'))
    }
    userName(){
        cy.get(UI.userName()).type(Cypress.env('USERNAME'))
    }
    password(){
        cy.get(UI.password()).type(Cypress.env('PASSWORD'))
    }
}
export default Register;