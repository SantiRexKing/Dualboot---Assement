import HomePageDemoblaze from '../../integration/pageObjects/homePageDemoblaze';
import cartPageDemoblaze from '../pageObjects/cartPageDemoblaze';
import CategoriesPageDemoblaze from '../pageObjects/categoriasPageDemoblaze';

let testData;
    before(() => {
    cy.fixture('data_Demoblaze').then((data) => {testData = data.purchaseData;});});

    describe('Purchase', () => {
        const homePage = new HomePageDemoblaze();
        const cart= new cartPageDemoblaze();
        const categories = new CategoriesPageDemoblaze();

        beforeEach(() => {
        homePage.visit();
        });

        describe('Happy Path Purchase', () => {

        it('Add to cart', () => {
            categories.clickButtonPhones();
            categories.clickRandomProduct();
            cart.assertAlertProductAdded();
            cart.clickButtonAddToCart();

            });

        it('Verify complete order succes', () => {  
            homePage.clickMainCart();
            cart.clickButtonPlaceOrder();
            cart.typePOname(testData.name);
            cart.typePOcountry(testData.country);
            cart.typePOcity(testData.city);
            cart.typePOcreditCard(testData.creditCard);
            cart.typePOmonth(testData.month);
            cart.typePOyear(testData.year);
            cart.clickButtonPurchase();
            cart.assertSuccessPurchase();
            
        });
    });  
});