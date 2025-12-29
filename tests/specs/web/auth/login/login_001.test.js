const LoginPage = require("./object/login.object");

describe("LOGIN-001 Register Page - Switch to Login", () => {
  it("should open Login Form when clicking Switch to Login textbutton", async () => {
    await browser.url("/register");

    const switchToLoginBtn = $("=Đã có tài khoản? Đăng nhập");
    await switchToLoginBtn.waitForClickable();
    await switchToLoginBtn.click();

    await LoginPage.username.waitForDisplayed({ timeout: 5000 });

    await expect(LoginPage.username).toBeDisplayed();
    await expect(LoginPage.password).toBeDisplayed();
    await expect(LoginPage.loginBtn).toBeDisplayed();
  });
});
