const { expect } = require("chai");
const LoginPage = require("../login/object/login.object");
const loginData = require("./data/login.data");
const { ErrorMessage } = require("../../../../constants/error.message");

describe("LOGIN 005 - Invalid Account Error ErrorMessage", () => {
  before(() => {
    // Mở trang login
    browser.url("/login");
  });

  it("should show error message when username and password are invalid", async () => {
    // 1. Nhập username
    var usernameVal = loginData.dumbUser.username;

    LoginPage.username.click();
    await LoginPage.username.setValue(usernameVal);
    expect(await LoginPage.username.getValue()).to.equal(usernameVal);

    // 2. Nhập password
    var passwordVal = loginData.dumbUser.password;

    LoginPage.password.click();
    await LoginPage.password.setValue(passwordVal);
    expect(await LoginPage.password.getValue()).to.equal(passwordVal);

    // 3. Click submit button
    LoginPage.loginBtn.click();

    // 4. Kiểm tra thông báo lỗi
    expect(await LoginPage.getToastMessage()).to.equal(ErrorMessage.MSG11); // MSG11
  });
});
