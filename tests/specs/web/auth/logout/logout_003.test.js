const LogoutPage = require("./object/logout.object");
const LoginPage = require("../login/object/login.object");
const loginData = require("../login/data/login.data");
const { SuccessMessage } = require("../../../../constants/success.message");

describe("LOGOUT-003 Verify Dialog contains correct UI elements", () => {
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

  it("should display message text, Logout button, and Cancel button in dialog", async () => {
    await LogoutPage.clickLogout();
    await expect(LogoutPage.dialogMessage).toBeDisplayed();
    await expect(LogoutPage.confirmLogoutBtn).toBeDisplayed();
    await expect(LogoutPage.cancelBtn).toBeDisplayed();
  });
});
