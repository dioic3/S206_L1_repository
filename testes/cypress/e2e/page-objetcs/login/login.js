import login from "../../elements/login/login";
const UI = new login;

class Login {
    //scenarios for a right login
    UserName(){
        cy.get(UI.username()).type(Cypress.env('username'))
    }
    PassWord(){
        cy.get(UI.password()).type(Cypress.env('password'))
    }

    //functions for a wrong login
    wrongName(){
        cy.get(UI.username()).type(Cypress.env('wrongUsername'))
    }
    wrongPass(){
        cy.get(UI.password()).type(Cypress.env('wrongPassword'))
    }
    
    //send for submit
    submit(){
        cy.get(UI.loginButton()).contains('Login').click()
    }
}
export default Login;