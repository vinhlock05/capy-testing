const LogoutPage = require("./object/logout.object");
const LoginPage = require("../login/object/login.object");
const loginData = require("../login/data/login.data");
const { SuccessMessage } = require("../../../../constants/success.message");

describe("LOGOUT-001 Verify Logout button is visible and clickable on all authenticated screens", () => {
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

  it("should display logout button and clickable", async () => {
    await expect(LogoutPage.logoutBtn).toBeDisplayed();
    await expect(LogoutPage.logoutBtn).toBeClickable();
  });
});
