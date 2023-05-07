class visit {
    visitPage(){
        cy.visit(Cypress.env('baseUrl'))
    }
}
export default visit;