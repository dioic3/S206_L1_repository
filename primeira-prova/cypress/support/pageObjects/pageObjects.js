import elements from "../elements/elements";
const UI = new elements;
class pageObjects {
    visit(){
        cy.visit('https://www.demoblaze.com/index.html')
    }
    
    validationHome(){
        cy.get(UI.header()).contains("PRODUCT STORE")
    }

    clickProduct(){
        cy.get(UI.product()).contains("Samsung galaxy s6").click()
    }
    
    validationMessage(){
        cy.get(UI.informations()).contains("The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.")
    }

    addToCard(){
        cy.get(UI.buttonCart()).contains("Add to cart").click()
    }
}
export default pageObjects;