import HomePageDemoblaze from '../../integration/pageObjects/homePageDemoblaze';
import cartPageDemoblaze from '../pageObjects/cartPageDemoblaze';


let testData;
    before(() => {
    cy.fixture('data_Demoblaze').then((data) => {testData = data.purchaseData;});});

    describe('Negative Cases', () => {
        const homePage = new HomePageDemoblaze();
        const cart= new cartPageDemoblaze();
        

        beforeEach(() => {
        homePage.visit();
        });
    
        describe('Negative Purchase', () => {

        it('Purchase Witouth Product', () => {
            homePage.clickMainCart();
            cart.clickButtonPlaceOrder();
            cart.typePOname(testData.name);
            cart.typePOcountry(testData.country);
            cart.typePOcity(testData.city);
            cart.typePOcreditCard(testData.creditCard);
            cart.typePOmonth(testData.month);
            cart.typePOyear(testData.year);
            cart.clickButtonPurchase();
            cart.assertNegativePurchase();
        });  
    });  
});