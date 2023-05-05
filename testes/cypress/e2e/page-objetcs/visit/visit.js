class visit{
    visit(){
        cy.visit(Cypress.env('baseurl'))
    }
}
export default visit;