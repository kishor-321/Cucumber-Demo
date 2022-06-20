$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/resources/FeatureFile/Login.feature");
formatter.feature({
  "name": "Facebook LogIn Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login Page Test scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Title page of Log in page is available",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter the \"9604080108\" and log in \"Kishor@1996\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInFlipKartStepDef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Login Page Test scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Title page of Log in page is available",
  "keyword": "When "
});
formatter.step({
  "name": "user enter the \"\u003cusername\u003e\" and log in \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Kishor@1996",
        "9604080108"
      ]
    },
    {
      "cells": [
        "KiShor",
        "8888083697"
      ]
    },
    {
      "cells": [
        "Lamao",
        "Onbroad"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Page Test scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Title page of Log in page is available",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter the \"Kishor@1996\" and log in \"9604080108\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInFlipKartStepDef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Page Test scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Title page of Log in page is available",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter the \"KiShor\" and log in \"8888083697\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInFlipKartStepDef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Page Test scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Title page of Log in page is available",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter the \"Lamao\" and log in \"Onbroad\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInFlipKartStepDef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("./src/test/resources/FeatureFile/flipkart.feature");
formatter.feature({
  "name": "Log in to Flipkart Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login test to Flipkart Application",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInFlipKartStepDef.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user is on login page",
  "keyword": "When "
});
formatter.match({
  "location": "LogInFlipKartStepDef.verify_that_user_is_on_login_page()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat LoginFlipKart.LogInFlipKartStepDef.verify_that_user_is_on_login_page(LogInFlipKartStepDef.java:23)\r\n\tat ✽.Verify that user is on login page(./src/test/resources/FeatureFile/flipkart.feature:5)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Enter username \u00279604559219\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInFlipKartStepDef.enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter password \u00279604559219\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInFlipKartStepDef.enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInFlipKartStepDef.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate that you are on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInFlipKartStepDef.i_validate_that_you_are_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LogInFlipKartStepDef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});