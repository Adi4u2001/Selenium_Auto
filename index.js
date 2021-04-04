const {Builder, By, Key, util, Browser} = require("selenium-webdriver");
async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://google.com");
   await driver.sleep(1000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="zV9nZe"]/div')).click();
    await driver.sleep(1000);
    await driver.findElement(By.name("q")).sendKeys("Mercedes",Key.RETURN);
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//*[@id="rso"]/div[1]/div[1]/div/div[1]/a/h3')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="uc-btn-accept-banner"]')).click();
    await driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div[2]/nav/div/ul/li[2]/div/span')).click();
    await driver.findElement(By.xpath('//*[@id="slick-slide00"]/div[2]/li[2]/a/span')).click();
    await driver.sleep(2000);
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    await driver.sleep(2000);
    await driver.close(Browser);
    await driver.switchTo().newWindow('tab');
    await driver.get("http://youtube.com");
    await driver.findElement(By.xpath('//*[@id="yDmH0d"]/c-wiz/div/div/div[2]/div[1]/div[4]/form/div[1]/div/button/div[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//paper-button[@aria-label='No, thanks']")).click();
    await driver.findElement(By.js('document.querySelector("#search")')).sendKeys("Mercedes",Key.RETURN);

}
example()
