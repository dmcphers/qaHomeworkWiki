import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
      header: By = By.css('.titleText')
      addEmployee: By = By.css('[name=addEmployee]')
      newEmployee: By = By.css('[name=employee11]')
      nameInput: By = By.css('[name="nameEntry"]')
      phoneInput: By = By.css('[name="phoneEntry"]')
      titleInput: By = By.css('[name="titleEntry"]')
      saveBtn: By = By.xpath('//button[@id="saveBtn"]')
      constructor(driver: WebDriver){
        this.driver = driver
    }

    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementsLocated(this.header))

    }
  }

  const emPage = new employeePage(driver)

  describe("Employee Manager Test", () => {
      beforeEach(async () => {
          await emPage.navigate();
      })
      afterAll(async () => {
          await driver.quit()
      })
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(emPage.header))
          await driver.findElement(emPage.addEmployee).click()
          await driver.findElement(emPage.newEmployee).click()
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).clear()
          await driver.findElement(emPage.nameInput).sendKeys("John Doe")
          await driver.findElement(emPage.phoneInput).click()
          await driver.findElement(emPage.phoneInput).clear()
          await driver.findElement(emPage.phoneInput).sendKeys("8675309")
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput).clear()
          await driver.findElement(emPage.titleInput).sendKeys("Gopher")
          await driver.sleep(5000);

  })
})
