const LogoutPage = require("./object/logout.object");
const LoginPage = require("../login/object/login.object");
const loginData = require("../login/data/login.data");
const { SuccessMessage } = require("../../../../constants/success.message");

describe("LOGOUT-005 Verify auth_token in Local Storage is NOT deleted on Cancel", () => {
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

  it("should not delete auth_token when cancel is clicked", async () => {
    await LogoutPage.clickLogout();
    const tokenBefore = await LogoutPage.getAuthToken();
    await LogoutPage.cancelLogout();
    const tokenAfter = await LogoutPage.getAuthToken();
    await expect(tokenAfter).toBe(tokenBefore);
  });
});
