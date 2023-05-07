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

    //funções do submit
    completeForms(){
        cy.get(page.name()).type(Cypress.env('firstNamePage') + Cypress.env('lastNamePage'))
        cy.get(page.emailForms()).type(Cypress.env('primaryEmail'))
        cy.get(page.phone()).type(Cypress.env('primaryNumber'))
        cy.get(page.message()).type('Quero saber mais sobre as reservas')
        cy.get(page.description()).type('Quanto é a reserva? Poderia me informar o valor? Necessito que entre em contato o mais rápido possível.')
    }

    submitForms(){
        cy.get(page.submit()).contains('Submit').click()
    }

    validateForms(){
        cy.get(page.alertForms()).then(body => {
            console.log(body)
            cy.get(body[0]).contains("We'll get back to you about")
            cy.get(body[0]).contains("Quero saber mais sobre as reservas")
            cy.get(body[0]).contains("as soon as possible.")
        })
    }

    valideSmallMessage(){
        cy.get(page.name()).type(Cypress.env('firstNamePage') + Cypress.env('lastNamePage'))
        cy.get(page.emailForms()).type(Cypress.env('primaryEmail'))
        cy.get(page.phone()).type(Cypress.env('primaryNumber'))
        cy.get(page.message()).type('Quero saber mais sobre as reservas')
        cy.get(page.description()).type('Quanto é a reserva?')
    }

    messageForms(){
        cy.get(page.alert()).contains("Message must be between 20 and 2000 characters.")
    }

    informationsOfHotel(){
        cy.get(page.alertForms()).then(body => {
            console.log(body)
            cy.get(body[1]).contains("Shady Meadows B&B")
            cy.get(body[1]).contains("The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S")
            cy.get(body[1]).contains("012345678901")
            cy.get(body[1]).contains("fake@fakeemail.com")
        })
    }
}
export default Page;