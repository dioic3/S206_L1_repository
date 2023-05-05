import login from "../../elements/login/login";
const UI = new login;

class Login {
    //scenarios for a right login
    UserName(){
        cy.get(UI.username()).type(Cypress.env('Username'))
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

    //assert
    message(){
        cy.get('.ng-binding').contains('Username or password is incorrect')
    }
}
export default Login;