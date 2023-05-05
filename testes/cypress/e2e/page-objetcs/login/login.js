import login from "../../elements/login/login";
const UI = new login;

class Login {
    //scenarios for a right login
    UserName(){
        cy.get(UI.username()).type(Cypress.env('USERNAME'))
    }
    PassWord(){
        cy.get(UI.password()).type(Cypress.env('PASSWORD'))
    }

    //functions for a wrong login
    wrongName(){
        cy.get(UI.username()).type(Cypress.env('WRONG_USERNAME'))
    }
    wrongPass(){
        cy.get(UI.password()).type(Cypress.env('WRONG_PASSWORD'))
    }
    
    //send for submit
    submit(){
        cy.get(UI.loginButton()).contains('Login').click()
    }
}
export default Login;