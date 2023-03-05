Feature: login to Application

    As a valid user
    I want to log in into Application
    
    Scenario: Valid login
        Given I open login page
        When A user enters the username "standard_user2", the password "secret_demoblaze_standard_user", and clicks on the login
        Then the user should be "standard_user2"
        
    Scenario: Add product to cart
        Given User is on products demoblaze landing page
        When added 2 items of the selected product to cart
        Then Verify that the order has two items
        Then user complet all form
        Then user finaly purchase
    

