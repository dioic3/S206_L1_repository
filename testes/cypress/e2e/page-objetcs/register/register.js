import register from "../../elements/register/register";
const UI = new register;

class Register {
    register(){
        cy.get(UI.register()).click()
    }
    firstName(){
        cy.get(UI.firstName()).type(Cypress.env('firstName'))
    }
    lastName(){
        cy.get(UI.lastName()).type(Cypress.env('lastName'))
    }
    userName(){
        cy.get(UI.userName()).type(Cypress.env('Username'))
    }
    password(){
        cy.get(UI.password()).type(Cypress.env('password'))
    }
    submit(){
        cy.get(UI.submit()).contains('Register').click()
    }
    message(){
        cy.get('.ng-binding').contains('Registration successful')
    }
}
export default Register;