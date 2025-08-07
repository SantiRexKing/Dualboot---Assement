import HomePageDemoblaze from '../../integration/pageObjects/homePageDemoblaze';
import LoginPageDemoblaze from '../../integration/pageObjects/loginPageDemoblaze';

let testData;
    before(() => {
    cy.fixture('data_Demoblaze').then((data) => {testData = data.credentials;});});

    describe('Login Tests Demoblaze', () => {
        const homePage = new HomePageDemoblaze();
        const loginPage = new LoginPageDemoblaze();


    it('login', () => {
        homePage.visit();
        homePage.clickMainLogin();
        loginPage.typeUserName(testData.valid.user);
        loginPage.typePassword(testData.valid.password);
        loginPage.clickLogin();
        loginPage.assertLogin();
        });

     it('Wronglogin', () => {
        homePage.visit();
        homePage.clickMainLogin();
        loginPage.typeUserName(testData.invalid.user);
        loginPage.typePassword(testData.invalid.password);
        loginPage.clickLogin();
        loginPage.assertLoginWrong();
        
        
    });
});