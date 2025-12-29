const { expect } = require("chai");
const LoginPage = require("../login/object/login.object");
const loginData = require("./data/login.data");
const { ErrorMessage } = require("../../../../constants/error.message");
const { SuccessMessage } = require("../../../../constants/success.message");
const {
  getAccessToken,
  getRefreshToken,
} = require("../../../../utils/token.util");

describe("LOGIN 011 - Successful Login JWT Token", () => {
  before(() => {
    // Mở trang login
    browser.url("/login");
  });

  it("should receive and store JWT token after successful login", async () => {
    // 1. Nhập username
    const usernameVal = loginData.validUser.username;
    LoginPage.username.click();
    await LoginPage.username.setValue(usernameVal);
    expect(await LoginPage.username.getValue()).to.equal(usernameVal);

    // 2. Nhập password
    const passwordVal = loginData.validUser.password;
    LoginPage.password.click();
    await LoginPage.password.setValue(passwordVal);
    expect(await LoginPage.password.getValue()).to.equal(passwordVal);

    // 3. Click submit button
    LoginPage.loginBtn.click();

    expect(await LoginPage.getToastMessage()).to.equal(
      SuccessMessage.LOGIN_SUCCESS
    );

    // 4. Kiểm tra JWT token trong local storage
    const accessToken = await browser.execute(() => {
      const authStr = localStorage.getItem("capy-vocab-auth");
      return authStr ? JSON.parse(authStr).state?.accessToken : null;
    });
    const refreshToken = await browser.execute(() => {
      const authStr = localStorage.getItem("capy-vocab-auth");
      return authStr ? JSON.parse(authStr).state?.refreshToken : null;
    });

    expect(accessToken).to.be.a("string").that.is.not.empty;
    expect(refreshToken).to.be.a("string").that.is.not.empty;
  });
});
