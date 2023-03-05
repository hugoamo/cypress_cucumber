class loginDemoblaze{
    elements={
        loginModalLink:()=> cy.get('#login2'),
        userNameInput:() => cy.get("#user-name"),
        passwordInput:()=>cy.get('#loginpassword'),
        loginBtn:()=>cy.get('#btn btn-primary'),
        nameofUser:()=>cy.get('#nameofuser')
    }

    clickLinkLogin(){
        this.elements.clickLinkLogin().click();

    }
    typeUsername(username) {
        this.elements.userNameInput().type(username);
      }
    
      typePassword(password) {
        this.elements.passwordInput().type(password);
      }
    
      clickLogin() {
        this.elements.loginBtn().click();
      }

      submitLogin(username,password){
        this.elements.clickLinkLogin().click();
        this.elements.userNameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginBtn().click();
      }  


}
export const loginDemoblaze=new loginDemoblaze();