import { Given, When, Then } from  "cypress-cucumber-preprocessor/steps"

Given("I open login page", ()=> {
    cy.visit("https://www.demoblaze.com/");
  });

  When("A user enters the username {string}, the password {string}, and clicks on the login", (standard_user2 , secret_demoblaze_standard_user)=>{
    cy.get('#login2').click()
    cy.get('#loginusername').type(standard_user2, { release: false, force: true })
    cy.get('#loginpassword').type(secret_demoblaze_standard_user, { release: false, force: true })
    cy.get('button').contains('Log in').click();
  });

  Then("the user should be {string}",  (standard_user2)=> {
    cy.get('#nameofuser').should('be.visible', "Welcome "+standard_user2)
  });

Given('User is on products demoblaze landing page', ()=>{
  cy.visit("https://www.demoblaze.com/");
    cy.get('#itemc').click();
})

  When('added 2 items of the selected product to cart', ()=>{
      cy.get('a').contains('Samsung galaxy s6').click()
      cy.get('a').contains('Add to cart').click()
      cy.on("window:confirm", (s) => {
        return true;
       });
      cy.get('a').contains('Home').click()    
      cy.get('a').contains('Sony xperia z5').click()
      cy.get('a').contains('Add to cart').click()
      cy.on("window:confirm", (s) => {
        return true;
       });
      cy.get('a').contains('Cart').click() 
  })

    Then('Verify that the order has two items',()=>{      
      //console.log(cy.get('#tbodyid').find('tr'))
      if(cy.get('#tbodyid').find('tr').should('have.length', 2)){
        cy.get('button').contains('Place Order').should('be.enabled')
        cy.get('button').contains('Place Order').click()
      }
      
    })

    Then('user complet all form',()=>{
      
      cy.get('#name').type("usuario", { release: false, force: true})
      cy.get('#country').type("Ecuador", { release: false, force: true})
      cy.get('#city').type("Quito", { release: false, force: true})
      cy.get('#card').type("4024007185195822", { release: false, force: true})
      cy.get('#month').type("07", { release: false, force: true})
      cy.get('#year').type("2024", { release: false, force: true})
      cy.get('button').contains('Purchase').click()

    })
    Then('user finaly purchase', ()=>{
       // cy.get('h2').contains('').should('be.enabled')

        cy.on('window:alert', (text) => {
          expect(text).to.contains('Thank you for your purchase!');
        });
    })