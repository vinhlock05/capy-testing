const { expect } = require("chai");
const LoginPage = require("./object/login.object");
const loginData = require("./data/login.data");
const { ErrorMessage } = require("../../../../constants/error.message");

describe("LOGIN 009 - Login with empty field", () => {
  before(() => {
    // Mở trang login
    browser.url("/login");
  });

  it("should show error message when username and password are empty", async () => {
    // 1. Click submit button
    LoginPage.loginBtn.click();

    expect(await LoginPage.getToastMessage()).to.equal(ErrorMessage.MSG1); // MSG1
  });
});
