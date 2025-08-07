class HomePageDemoblaze{

    elements = {
        mainButtonHome :() => cy.xpath('//a[@class="nav-link" and contains(text(), "Home")]'),
        mainButtonContact :() => cy.xpath('//a[@class="nav-link" and contains(text(), "Contact") ]'),
        mainButtonAboutUs :() => cy.xpath('//a[@class="nav-link" and contains(text(), "About us") ]'),
        mainButtonCart :() => cy.xpath('//a[@class="nav-link" and contains(text(), "Cart") ]'),
        mainButtonLogin :() => cy.xpath('//a[@class="nav-link" and contains(text(), "Log in")]'),
        mainButtonSignUp :() => cy.xpath('//a[@class="nav-link" and contains(text(), "Sign up") ]'),
    }

        visit() {
        cy.visit('/');
        }

        clickMainLogin(){
        this.elements.mainButtonLogin().click();
        }
        clickMainHome(){
        this.elements.mainButtonHome().click();
        }
        clickMainContact(){
        this.elements.mainButtonContact().click();
        }
        clickMainAboutUs(){
        this.elements.mainButtonAboutUs().click();
        }
        clickMainCart(){
        this.elements.mainButtonCart().click();
        }
        clickMainSignUp(){
        this.elements.mainButtonSignUp().click();
        }


}

export default HomePageDemoblaze;