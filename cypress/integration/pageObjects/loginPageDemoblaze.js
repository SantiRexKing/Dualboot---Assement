class LoginPageDemoblaze{

    elements = {
        
        loginInputUserName :() => cy.xpath('//input[@id="loginusername" and @type="text"]'), 
        loginInputPassword :() => cy.xpath('//input[@id="loginpassword" and @type="password"]'),
        loginButtonClose :() => cy.xpath('//div[@id="logInModal"]//button[contains(@class,"btn") and contains(text(), "Close")]'),
        loginButtonLog :() => cy.xpath('//div[@id="logInModal"]//button[contains(@class,"btn") and contains(text(), "Log in")]'),
        
    }

    typeUserName(username){
        this.elements.loginInputUserName().clear({ force: true }).type(username, { force: true });
    }
    
    typePassword(password){
        this.elements.loginInputPassword().clear({ force: true }).type(password, { force: true });
    }
    
    clickLogin(){
        this.elements.loginButtonLog().click();    
    }

     assertLogin(){
        cy.contains('Log out').should('be.visible');       
    }

     assertLoginWrong(){
        cy.contains('Log in').should('be.visible');       
    }

    
}


export default LoginPageDemoblaze;