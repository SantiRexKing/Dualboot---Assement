class cartPageDemoblaze{

    elements = {
        
        buttonPlaceOrder :() => cy.xpath('//div[@id="page-wrapper"]//button[contains(@class,"btn") and contains(text(), "Place Order")]'), 
        POname :() => cy.xpath('//input[@id="name" and @type="text"]'),
        POcountry :() => cy.xpath('//input[@id="country" and @type="text"]'),
        POcity :() => cy.xpath('//input[@id="city" and @type="text"]'),
        POcreditCard :() => cy.xpath('//input[@id="card" and @type="text"]'),
        POmonth :() => cy.xpath('//input[@id="month" and @type="text"]'),
        POyear :() => cy.xpath('//input[@id="year" and @type="text"]'),
        buttonClose :() => cy.xpath('//div[@id="orderModal"]//button[contains(@class,"btn") and contains(text(), "Close")]'), 
        buttonPurchase :() => cy.xpath('//div[@id="orderModal"]//button[contains(@class,"btn") and contains(text(), "Purchase")]'), 
        buttonAddToCart :() => cy.xpath('//a[@class="btn btn-success btn-lg" and contains(text(), "Add to cart")]'), 
        totalCart :() => cy.xpath('//div[@class="panel-heading"]/h3[@class="panel-title" and @id="totalp"]'), 
        

    }

        clickButtonPlaceOrder(){
        this.elements.buttonPlaceOrder().click();
        }
        clickButtonClose(){
        this.elements.buttonClose().click();
        }
        clickButtonPurchase(){
        this.elements.buttonPurchase().click();
        }
        clickButtonAddToCart(){
        this.elements.buttonAddToCart().click();
        }

        //filled

        typePOname(name){
        this.elements.POname().clear({ force: true }).type(name, { force: true });
        }
        typePOcountry(country){
        this.elements.POcountry().clear({ force: true }).type(country, { force: true });
        }
        typePOcity(city){
        this.elements.POcity().type(city);
        }
        typePOcreditCard(card){
        this.elements.POcreditCard().type(card);
        }
        typePOmonth(month){
        this.elements.POmonth().type(month);
        }
        typePOyear(year){
        this.elements.POyear().type(year);
        }




        //assert

        assertAlertProductAdded() {
        Cypress.once('window:alert', t => expect(t).to.eq('Product added'));
        }

        assertSuccessPurchase() {
        cy.contains('Thank you for your purchase!').should('be.visible');       
        }

        assertNegativePurchase() {
        cy.contains('Error').should('be.visible');       
        }
        
        getTotalCartValue() {
        return this.elements.totalCart()
        .invoke('text').then(text => parseFloat(text.replace(/[^0-9.]/g, '') || 0));
    }
}


export default cartPageDemoblaze;