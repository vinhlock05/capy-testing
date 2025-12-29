const LogoutPage = require("./object/logout.object");
const LoginPage = require("../login/object/login.object");
const loginData = require("../login/data/login.data");
const { SuccessMessage } = require("../../../../constants/success.message");

describe("LOGOUT-010 Verify success message MSG14 is displayed on Login screen", () => {
  //logout successful before perform testcase
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

    await LogoutPage.clickLogout();

    await browser.waitUntil(
      async () => {
        const accessToken = await browser.execute(() => {
          const authStr = localStorage.getItem("capy-vocab-auth");
          return authStr ? JSON.parse(authStr).state?.accessToken : null;
        });
        const refreshToken = await browser.execute(() => {
          const authStr = localStorage.getItem("capy-vocab-auth");
          return authStr ? JSON.parse(authStr).state?.refreshToken : null;
        });
        console.log(refreshToken, accessToken);

        await expect(accessToken).toBeNull();
        await expect(refreshToken).toBeNull();

        return true;
      },
      {
        timeout: 5000,
        timeoutMsg: "Auth token was not cleared after logout ❌",
      }
    );
  });

  it("should display MSG14 on login screen after logout", async () => {
    const message = await LogoutPage.getToastMessage();
    await expect(message).toBe("Logout successfully");
  });
});
