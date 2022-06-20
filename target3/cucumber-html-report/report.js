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
formatter.match({
  "location": "LogInStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:125)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:156)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:91)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Stepdefination.LogInStepDefination.user_is_on_Login_Page(LogInStepDefination.java:21)\r\n\tat ✽.User is on Login Page(./src/test/resources/FeatureFile/Login.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Title page of Log in page is available",
  "keyword": "When "
});
formatter.match({
  "location": "LogInStepDefination.title_page_of_Log_in_page_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter the username and log in password",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepDefination.user_enter_the_username_and_log_in_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepDefination.user_is_on_Home_page()"
});
formatter.result({
  "status": "skipped"
});
});