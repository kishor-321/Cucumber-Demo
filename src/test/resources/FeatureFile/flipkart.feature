Feature: Log in to Flipkart Application
 
  Scenario: Login test to Flipkart Application
    Given User is on login page
    When Verify that user is on login page
    Then Enter username '9604559219'
    Then Enter password '9604559219'
    Then Click on Login button
    Then I validate that you are on home page
    And Close the browser