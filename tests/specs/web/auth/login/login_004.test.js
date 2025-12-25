const { expect } = require("chai");
const LoginPage = require("../login/object/login.object");
const loginData = require("./data/login.data");

describe("LOGIN 004 - Password Visibility", () => {
  before(() => {
    browser.url("/login");
  });

  it("should show eye icon and toggle password visibility", async () => {
    // 1. Click vào password field
    LoginPage.password.click();

    // 2. Nhập password
    var passwordVal = loginData.dumbUser.password;
    LoginPage.enterPassword(passwordVal);

    // Kiểm tra password đang ở dạng hidden
    const typeBefore = await LoginPage.password.getAttribute("type");
    expect(typeBefore).to.equal("password");

    // Kiểm tra eye icon hiển thị
    expect(await LoginPage.eyeIcon.isDisplayed()).to.be.true;

    // Click vào eye icon để toggle
    LoginPage.eyeIcon.click();

    // Kiểm tra password chuyển sang visible
    // Chờ type attribute chuyển thành text
    await browser.waitUntil(
      async () => (await LoginPage.password.getAttribute("type")) === "text",
      {
        timeout: 2000,
        timeoutMsg: "Password did not become visible",
      }
    );

    const typeAfter = await LoginPage.password.getAttribute("type");
    expect(typeAfter).to.equal("text");

    // Click lại để ẩn password
    await LoginPage.eyeIcon.click();

    // Chờ type attribute chuyển về password
    await browser.waitUntil(
      async () =>
        (await LoginPage.password.getAttribute("type")) === "password",
      {
        timeout: 2000,
        timeoutMsg: "Password did not hide",
      }
    );

    const typeFinal = await LoginPage.password.getAttribute("type");
    expect(typeFinal).to.equal("password");
  });
});
