Feature: Facebook LogIn Feature

  Scenario: Login Page Test scenario
    Given User is on Login Page
    When Title page of Log in page is available
    Then user enter the "9604080108" and log in "Kishor@1996"
    Then User is on Home page
    Then Close the browser

  Scenario Outline: Login Page Test scenario
    Given User is on Login Page
    When Title page of Log in page is available
    Then user enter the "<username>" and log in "<password>"
    Then User is on Home page
     Then Close the browser

    Examples: 
      | username   	 | password     |
      | Kishor@1996 | 9604080108 |
      | KiShor    		 	 | 8888083697 |
      | Lamao     	     | Onbroad       |