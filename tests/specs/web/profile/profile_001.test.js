/**
 * TC-PROF-001: Verify that clicking the "Cá nhân" button from home page screen successfully opens the Profile Details Page
 */

const ProfileHelper = require("./helpers/profile.helpers");
const ProfileObject = require("./profile.object");
const LoginPage = require("../auth/login/object/login.object");
const loginData = require("../auth/login/data/login.data");
const { SuccessMessage } = require("../../../constants/success.message");

describe("TC-PROF-001: Profile Navigation", () => {
  before(async () => {
    await browser.url("/login");

    const validUser = loginData.validUser;
    await LoginPage.login(validUser.username, validUser.password);

    expect(await LoginPage.getToastMessage()).toEqual(
      SuccessMessage.LOGIN_SUCCESS
    );
  });

  it('TC-PROF-001: Should open Profile Details Page when clicking "Cá nhân" button', async () => {
    // Action: Click on "Cá nhân" button
    await ProfileHelper.navigateToProfilePage();

    expect(await browser.getUrl()).toContain("/profile");

    await browser.pause(2000);

    // Verify key profile elements are visible
    const usernameVisible = await ProfileObject.profileUsername.isDisplayed();
    const emailVisible = await ProfileObject.profileEmail.isDisplayed();
    const avatarVisible = await ProfileObject.profileAvatar.isDisplayed();

    expect(usernameVisible).toBe(true);
    expect(emailVisible).toBe(true);
    expect(avatarVisible).toBe(true);
  });
});
