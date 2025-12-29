const LogoutPage = require("./object/logout.object");
const LoginPage = require("../login/object/login.object");
const loginData = require("../login/data/login.data");
const { SuccessMessage } = require("../../../../constants/success.message");

describe("LOGOUT-006 Verify clicking 'Logout' in dialog initiates token deletion", () => {
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

  it("should delete auth_token when confirm logout is clicked", async () => {
    await LogoutPage.confirmLogout();
    // Wait for logout process
    await browser.waitUntil(
      async () => {
        return (await browser.getUrl()).includes("/login");
      },
      { timeout: 10000 }
    );
    const accessToken = await browser.execute(() => {
      const authStr = localStorage.getItem("capy-vocab-auth");
      return authStr ? JSON.parse(authStr).state?.accessToken : null;
    });
    const refreshToken = await browser.execute(() => {
      const authStr = localStorage.getItem("capy-vocab-auth");
      return authStr ? JSON.parse(authStr).state?.refreshToken : null;
    });

    await expect(accessToken).toBeNull();
    await expect(refreshToken).toBeNull();
  });
});
