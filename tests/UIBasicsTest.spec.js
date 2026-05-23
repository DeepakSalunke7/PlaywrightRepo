
const {test, expect} = require('@playwright/test');

test('Browser context browser fixture playwright test', async ({browser}) =>
{
//use async due to await page actions. In JS, await can only be used inside async functions.
    const context = await browser.newContext(); //create a new browser context. Similar to an incognito window.    
    const page = await context.newPage();
    await page.goto("https://www.google.com");
    console.log(await page.title());
    expect(await page.title()).toBe("Google");
});

test('Page fixture playwright test', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    expect(await page.title()).toBe("LoginPage Practise | Rahul Shetty Academy");
    await page.locator("input#username").fill("rahulshetty"); //fill incorrect username
    await page.locator("[name='password']").fill("learning");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect"); //assertion to verify error message

    //correct the username and login
    await page.locator("input#username").fill("");
    await page.locator("input#username").fill("rahulshettyacademy");
    await page.locator("[name='password']").fill("");
    await page.locator("[name='password']").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();

     console.log(await page.locator("//a[normalize-space()='ProtoCommerce']").textContent());

     expect(await page.locator("//a[normalize-space()='ProtoCommerce']").textContent()).toBe("ProtoCommerce");

     //console.log(await page.locator(".card-title a").nth(1).textContent());
     const categoryTiles=await page.locator("[class='list-group-item']")
     console.log(await categoryTiles.allTextContents()); //print all category tiles text
     console.log(await categoryTiles.first().textContent());
     console.log(await categoryTiles.nth(0).textContent());
     console.log(await categoryTiles.nth(1).textContent());
     console.log(await categoryTiles.nth(2).textContent());


    // const abc=await page.locator(".card-body a").first().textContent(); //parent to child traverse
    // console.log(abc);
    // console.log(await page.locator(".card-body a").last().textContent());    
    // console.log(await page.locator(".card-body a").allTextContents());
    const allmobiles= await page.locator(".card-body a").allTextContents();//return all contents in veriablr
    console.log(allmobiles);

});

test ('UI dropdown and radio button', async ({page}) =>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("input#username").fill("rahulshettyacademy");
await page.locator("[name='password']").fill("Learning@830$3mK2");
// click the actual radio input (not the span) so the value becomes checked
await page.locator("input[type='radio']").last().click(); // radio button handle
await page.locator("[id='okayBtn']").click(); // webbased popup handle

await expect(page.locator("input[type='radio']").last()).toBeChecked();

await page.locator("select.form-control").selectOption("consult");//select element from drop down
await page.locator("input#terms").click();
await expect(page.locator("input#terms")).toBeChecked();

//await page.pause();


});