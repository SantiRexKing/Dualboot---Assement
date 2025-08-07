import HomePageDemoblaze from '../../integration/pageObjects/homePageDemoblaze';
import cartPageDemoblaze from '../pageObjects/cartPageDemoblaze';
import CategoriesPageDemoblaze from '../pageObjects/categoriasPageDemoblaze';

describe('Purchase', () => {
  const homePage = new HomePageDemoblaze();
  const cart = new cartPageDemoblaze();
  const categories = new CategoriesPageDemoblaze();

  beforeEach(() => {
    homePage.visit();
  });

  describe('Validation When Add to cart change correctly the price', () => {


    it('Modify products in the cart', () => {
      categories.clickButtonPhones();
      categories.clickRandomProduct();
      cart.clickButtonAddToCart();
      homePage.clickMainCart();
      cart.getTotalCartValue().then(firstTotal => {
      homePage.clickMainHome();
      categories.clickButtonPhones(); 
      categories.clickRandomProduct();
      cart.clickButtonAddToCart();
      homePage.clickMainCart();
      cy.wait(2000);
      cart.getTotalCartValue().should('be.greaterThan', firstTotal);  
       });
    });
  });
});
