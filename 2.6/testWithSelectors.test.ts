import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.css('[name=hdrInput') //fill in the blank
    const mkeInput: By = By.css('[name=mkeInput') //fill in the blank
    const oaiInput: By = By.css('[name=oriInput') //fill in the blank
    const nameInput: By = By.css('[name=namInput') //fill in the blank
    const clrBtn: By = By.css('[id=clearBtn]') //fill in blank 
    const submitBtn: By = By.css('[id=saveBtn]') //fill in blank
    const errorMsg: By = By.xpath('//p[@id="validHeader"]') // fill in blank 

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("test 1")
        await driver.findElement(mkeInput).sendKeys("test 2")
        await driver.findElement(oaiInput).sendKeys("test 3")
        await driver.findElement(nameInput).sendKeys("test 4")
        await driver.findElement(submitBtn).click()
        //expect(errorMsg).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        await driver.sleep(5000)
        
    })
})
