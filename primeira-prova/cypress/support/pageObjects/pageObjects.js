import elements from "../elements/elements";
const UI = new elements;
class pageObjects {
    visit(){
        cy.visit('https://www.demoblaze.com/index.html')
    }
    
    validationHome(){
        cy.get(UI.header()).contains("PRODUCT STORE")
    }
}
export default pageObjects;