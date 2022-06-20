package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
		
		features= {".\\src\\test\\resources\\FeatureFile"},//folder path
		glue= {"Stepdefination"}, //package name
		plugin = {"html:target2/cucumber-html-report"},
//		plugin={"junit:FolderName/Filename-xml"}, // we can generate json also
//		plugin = {"json:Folder/File_jsoon"}, //format type
		monochrome = true //give the readable format
//		dryRun=true //tria check the mapping between feature file and stepdefination file
//		strict =true //completeness any step is not defind 
//		tags={"smokeTest","RegressionTest","E2ETesting"} only smoke test will executes due to tags on the methods on class of login stepDefination
//		hooks is use in the defination class where declare the @before @after on method as well as we can declare in feature file with the @First @second for scenarios
		)
public class TestRunner extends AbstractTestNGCucumberTests  {

}
