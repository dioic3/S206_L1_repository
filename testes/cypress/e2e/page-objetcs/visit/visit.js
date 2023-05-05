class visit{
    visit(){
        cy.visit(Cypress.env('BASE_URL'))
    }
}
export default visit;