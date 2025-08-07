import HomePageDemoblaze from '../../integration/pageObjects/homePageDemoblaze';
import CategoriesPageDemoblaze from '../pageObjects/categoriasPageDemoblaze';

    describe('Categories Validations on Demoblaze', () => {
        const homePage = new HomePageDemoblaze();
        const categories= new CategoriesPageDemoblaze();

        beforeEach(() => {
        homePage.visit();
        });

        describe('Verify existing categories', () => {

        it('Verify category Phones', () => {
            categories.clickButtonPhones();
            categories.assertExistingCategoriesPhones();
            });
        it('Verify category Laptops', () => {
            categories.clickButtonLaptops();
            categories.assertExistingCategoriesLaptops();
            });
        it('Verify category Monitors', () => {
            categories.clickButtonMonitors();
            categories.assertExistingCategoriesMonitors();       
            }); 
        });  
    
        
        describe('Verify each category shows correctly', () => {

        it('Verify Show correct Phones', () => {
            categories.clickButtonPhones();
            categories.assertShowProductCorrectPhones();
            });
        it('Verify Show correct Laptops', () => {
            categories.clickButtonLaptops();
            categories.assertShowProductCorrectLaptops();
            });
        it('Verify Show correct Monitors', () => {
            categories.clickButtonMonitors();
            categories.assertShowProductCorrectMonitors();       
        }); 
    });  
});