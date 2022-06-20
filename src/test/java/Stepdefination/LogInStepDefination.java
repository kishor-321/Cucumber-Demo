package Stepdefination;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LogInStepDefination {
	WebDriver driver;

@Given("^User is on Login Page$")
public void user_is_on_Login_Page() {
    // Write code here that turns the phrase above into concrete actions
	WebDriverManager.chromedriver().setup();
	driver=new ChromeDriver();
   driver.get("https://www.facebook.com/");
    
}

@When("Title page of Log in page is available")
public void title_page_of_Log_in_page_is_available() {
    // Write code here that turns the phrase above into concrete actions
	String Title="Facebook – log in or sign up";
	assertEquals(driver.getTitle(), Title);
}

@Then("user enter the {string} and log in {string}")
public void user_enter_the_username_and_log_in_password(String username, String password) {
    // Write code here that turns the phrase above into concrete actions
    driver.findElement(By.cssSelector("#email")).sendKeys(username);
    driver.findElement(By.cssSelector("#pass")).sendKeys(password);
}

@Then("User is on Home page")
public void user_is_on_Home_page() {
    // Write code here that turns the phrase above into concrete actions
   String TitleHomePAge= driver.getTitle();
   System.out.println("Home Page :"+TitleHomePAge);
   Assert.assertEquals(driver.getTitle(), TitleHomePAge);
}
@Then("Close the browser")
public void Close_the_browser() {
	driver.quit();
}


}
