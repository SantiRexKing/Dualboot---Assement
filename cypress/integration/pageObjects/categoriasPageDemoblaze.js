class CategoriesPageDemoblaze{

    elements = {
        buttonPhones :() => cy.xpath('//a[@id="itemc" and contains(text(), "Phones")]'),
        buttonLaptops :() => cy.xpath('//a[@id="itemc" and contains(text(), "Laptops")]'),
        buttonMonitors :() => cy.xpath('//a[@id="itemc" and contains(text(), "Monitors")]'),
        cardValidationCategories :() => cy.xpath('//div[@class="card h-100"]//a[contains(@class, "hrefch")]'),
       

        }


        clickButtonPhones(){
        this.elements.buttonPhones().click();
        }
        clickButtonLaptops(){
        this.elements.buttonLaptops().click();
        }
        clickButtonMonitors(){
        this.elements.buttonMonitors().click();
        }
        clickRandomProduct(){
        this.elements.cardValidationCategories().then($links => cy.wrap($links[Math.floor(Math.random() * $links.length)]).click());
        }


        //Asserts 1

        assertExistingCategoriesPhones(){
        this.elements.buttonPhones().should('be.visible');   
        cy.contains('Samsung').should('be.visible');       
        }

        assertExistingCategoriesLaptops(){
        this.elements.buttonLaptops().should('be.visible');   
        cy.contains('Sony').should('be.visible');       
        }

        assertExistingCategoriesMonitors(){
        this.elements.buttonLaptops().should('be.visible');   
        cy.contains('Apple').should('be.visible');       
        }
        
        //Asserts 2

        assertShowProductCorrectPhones(){
        this.elements.cardValidationCategories().should('be.visible');        
        }

        assertShowProductCorrectLaptops(){
        this.elements.cardValidationCategories().should('be.visible');       
        }

        assertShowProductCorrectMonitors(){
        this.elements.cardValidationCategories().should('be.visible');        
        }

        
}

export default CategoriesPageDemoblaze;