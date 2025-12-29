/**
 * TC-PROF-002: Email field is visible
 * TC-PROF-003: Username field is visible
 * TC-PROF-004: Avatar field is visible
 * TC-PROF-005: Number of learning streak is visible
 * TC-PROF-006: Number of learning day is visible
 * TC-PROF-007: User balance is visible
 * TC-PROF-008: "Chỉnh sửa" button is available on detail profile screen
 */

const { SuccessMessage } = require("../../../constants/success.message");
const ProfileHelper = require("./helpers/profile.helpers");
const ProfileObject = require("./profile.object");
const LoginPage = require("../auth/login/object/login.object");
const loginData = require("../auth/login/data/login.data");
describe("TC-PROF-002 & TC-PROF-008: Profile Field Visibility", () => {
  before(async () => {
    await browser.url("/login");

    const validUser = loginData.validUser;
    await LoginPage.login(validUser.username, validUser.password);

    expect(await LoginPage.getToastMessage()).toEqual(
      SuccessMessage.LOGIN_SUCCESS
    );

    // Action: Click on "Cá nhân" button
    await ProfileHelper.navigateToProfilePage();

    expect(await browser.getUrl()).toContain("/profile");

    await browser.pause(2000);
  });

  it("TC-PROF-002: Email field should be visible on Profile Details Page", async () => {
    // Expected: Email field is visible
    const emailVisible = await ProfileObject.profileEmail.isDisplayed();
    expect(emailVisible).toBe(true);

    // Verify email content is not empty
    const emailText = await ProfileObject.profileEmail.getText();
    expect(emailText).toBeTruthy();
    expect(emailText).toContain("@");
  });

  it("TC-PROF-003: Username field should be visible on Profile Details Page", async () => {
    // Expected: Username field is visible
    const nameHeaderVisible = await ProfileObject.profileUsername.isDisplayed();
    expect(nameHeaderVisible).toBe(true);

    // Verify username content is not empty
    const nameText = await ProfileObject.profileUsername.getText();
    expect(nameText).toBeTruthy();
  });

  it("TC-PROF-004: Avatar field should be visible on Profile Details Page", async () => {
    // Expected: Avatar field is visible
    const avatarVisible = await ProfileObject.profileAvatar.isDisplayed();
    expect(avatarVisible).toBe(true);
  });

  it("TC-PROF-005: Number of learning streak should be visible", async () => {
    // Expected: Streak display is visible
    const streakVisible = await ProfileObject.streakDisplay.isDisplayed();
    expect(streakVisible).toBe(true);

    // Verify streak text contains "day streak"
    const streakText = await ProfileObject.streakDisplay.getText();
    expect(streakText).toContain("day streak");
  });

  it("TC-PROF-006: Number of learning day should be visible", async () => {
    // Expected: Total study day card is visible
    const studyDayVisible = await ProfileObject.totalStudyDayCard.isDisplayed();
    expect(studyDayVisible).toBe(true);

    // Verify the label text
    const studyDayText = await ProfileObject.totalStudyDayCard.getText();
    expect(studyDayText).toContain("Tổng ngày học");
  });

  it("TC-PROF-007: User balance should be visible", async () => {
    // Expected: Balance card is visible
    const balanceVisible = await ProfileObject.balanceCard.isDisplayed();
    expect(balanceVisible).toBe(true);

    // Verify the label text
    const balanceText = await ProfileObject.balanceCard.getText();
    expect(balanceText).toContain("Số dư");
  });

  it('TC-PROF-008: "Chỉnh sửa" button should be available on detail profile screen', async () => {
    // Expected: Edit button is visible and enabled
    const editButtonVisible = await ProfileObject.editButton.isDisplayed();
    expect(editButtonVisible).toBe(true);

    const editButtonEnabled = await ProfileHelper.isElementEnabled(
      ProfileObject.editButton
    );
    expect(editButtonEnabled).toBe(true);

    // Verify button text
    const buttonText = await ProfileObject.editButton.getText();
    expect(buttonText).toContain("Chỉnh sửa");
  });
});
