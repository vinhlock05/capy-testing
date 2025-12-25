const { expect } = require("chai");
const LoginPage = require("../login/object/login.object");
const loginData = require("./data/login.data");
const { ErrorMessage } = require("../../../../constants/error.message");

describe("LOGIN 0010 - Empty Password Error ErrorMessage", () => {
  before(() => {
    // Mở trang login
    browser.url("/login");
  });

  it("should show error message when username is entered but password is empty", async () => {
    // 1. Nhập username
    const usernameVal = loginData.dumbUser.username;
    LoginPage.username.click();
    await LoginPage.username.setValue(usernameVal);
    expect(await LoginPage.username.getValue()).to.equal(usernameVal);

    // 2. Không nhập password (giữ trống)
    LoginPage.password.click();
    await LoginPage.password.setValue(""); // để trống
    expect(await LoginPage.password.getValue()).to.equal("");

    // 3. Click submit button
    LoginPage.loginBtn.click();

    // 4. Kiểm tra thông báo lỗi
    expect(await LoginPage.getToastMessage()).to.equal(ErrorMessage.MSG1); // MSG1: "Please fill in all required fields"
  });
});
