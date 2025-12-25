const LoginPage = require("../login/object/login.object");
const loginData = require("../login/data/login.data");

describe("Inputs behavior", () => {
  it("LOGIN-002 - should allow user to input username", async () => {
    // Precondition
    await browser.url("/login");

    // Step 1: Click username input
    await expect(LoginPage.username).toBeDisplayed();
    await LoginPage.username.click();

    // Step 2: Enter value to username input
    var usernameVal = loginData.dumbUser.username;
    await LoginPage.enterUsername(usernameVal);

    // Expected: username displays entered value
    await expect(LoginPage.username).toHaveValue(usernameVal);
  });

  it("LOGIN-003 - should allow user to input password", async () => {
    // Precondition
    await browser.url("/login");

    // Step 1: Click password input
    await expect(LoginPage.password).toBeDisplayed();
    await LoginPage.password.click();

    // Step 2: Enter value to password input
    var passwordVal = loginData.dumbUser.password;
    await LoginPage.enterPassword(passwordVal);

    // Expected: password displays entered value
    await expect(LoginPage.password).toHaveValue(passwordVal);
  });
});
