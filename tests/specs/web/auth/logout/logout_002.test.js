const LogoutPage = require("./object/logout.object");
const LoginPage = require("../login/object/login.object");
const loginData = require("../login/data/login.data");
const { SuccessMessage } = require("../../../../constants/success.message");

describe("LOGOUT-002 Verify clicking Logout triggers sequence and calls onLogoutClick()", () => {
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

  it("should appear confirmation dialog", async () => {
    // Click logout button
    await LogoutPage.clickLogout();
    // Assuming onLogoutClick shows the dialog, so check dialog appears
    await expect(LogoutPage.confirmationDialog)
      .toBeDisplayed()
      .catch((err) => {
        throw new Error(
          "Confirmation dialog did not appear after clicking logout"
        );
      });
  });
});
