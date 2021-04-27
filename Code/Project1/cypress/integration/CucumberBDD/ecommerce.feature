Feature: Buy product on the website

    This will buy product on the website

    @Regression
    Scenario: Buy Product TC01
    Given The user visits the ecommerce page
    When  we add items to cart
    And Validate the total price
    And Clicks submit 
    Then Validate the thank you message
    
    @Smoke
    Scenario: Register User
    Given The user visits the ecommerce page
    And Enter the required details for registrations
    | Name  |  Geneder | 
    | Raja  |  Male    |
    Then Validate the page Behaviour
    And submit the page and validate the registration