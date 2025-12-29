const LogoutPage = require("./object/logout.object");
const LoginPage = require("../login/object/login.object");
const loginData = require("../login/data/login.data");
const { SuccessMessage } = require("../../../../constants/success.message");

describe("LOGOUT-004 Verify clicking 'Cancel' closes dialog and keeps user on page", () => {
  before(async () => {
    // Login first
    await browser.url("/login");
    await LoginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );
    await expect(await LoginPage.getToastMessage()).toEqual(
      SuccessMessage.LOGIN_SUCCESS
    );
  });

  it("should close dialog and keep user on page when cancel is clicked", async () => {
    await LogoutPage.clickLogout();
    const currentUrl = await browser.getUrl();
    await LogoutPage.cancelLogout();
    await expect(LogoutPage.confirmationDialog).not.toBeDisplayed();
    await expect(browser).toHaveUrl(currentUrl);
  });
});
