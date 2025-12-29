const LogoutPage = require("./object/logout.object");
const LoginPage = require("../login/object/login.object");
const loginData = require("../login/data/login.data");

describe("LOGOUT-007 Verify user cannot access protected pages, 404 page will be presented", () => {
  // Logout is successful; user at Login screen.

  before(async () => {
    await browser.url("/login");
  });

  it("should show 404 page when accessing /course without permission", async () => {
    await browser.url("/course");

    const title404 = await $("h1=404");
    const message404 = await $("h2*=Không tìm thấy");

    await expect(title404).toBeDisplayed();
    await expect(message404).toBeDisplayed();
  });
});
