import letMe from "../../elements/let-me/let-me";
const page = new letMe;
class Page {
    clickButton(){
        cy.get(page.button()).contains('Let me hack!').click()
    }

    verifyText(){
        cy.get(page.textBox()).then(body => {
            cy.get(body[0]).contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.')
        })
    }

    room(){
        cy.get(page.button()).contains('Book this room').click()
    }

    completeInformations(){
        cy.get(page.firstName()).type(Cypress.env('firstNamePage'))
        cy.get(page.lastName()).type(Cypress.env('lastNamePage'))
        cy.get(page.email()).type(Cypress.env('primaryEmail'))
        cy.get(page.number()).type(Cypress.env('primaryNumber'))
    }

    buttonBook(){
        cy.get(page.button()).contains('Book').click()
    }
    
    alert(){
        cy.get(page.alert()).contains('não deve ser nulo')
    }

    cancel(){
        cy.get(page.button()).contains('Cancel').click()
    }

    boxRoom(){
        cy.get(page.boxInformation()).contains('Aenean porttitor mauris sit amet lacinia molestie. In posuere accumsan aliquet. Maecenas sit amet nisl massa. Interdum et malesuada fames ac ante.')
    }
}
export default Page;