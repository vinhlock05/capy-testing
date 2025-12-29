const ProfileObject = require("../profile.object");
const profileData = require("../data/profile.data");

class ProfileHelper {
  /**
   * Navigate to profile page (assuming user is already on home/course page)
   * Clicks on "Cá nhân" button
   */
  async navigateToProfilePage() {
    const canhanButton = await $("a*=Cá nhân");

    await canhanButton.waitForDisplayed({ timeout: 5000 });
    await canhanButton.click();
  }

  /**
   * Verify profile details are displayed
   */
  async verifyProfileDetailsDisplayed() {
    const nameDisplayed = await ProfileObject.profileNameHeader.isDisplayed();
    const emailDisplayed = await ProfileObject.profileEmail.isDisplayed();
    const avatarDisplayed = await ProfileObject.profileAvatar.isDisplayed();

    return nameDisplayed && emailDisplayed && avatarDisplayed;
  }

  /**
   * Open edit profile dialog
   */
  async openEditDialog() {
    try {
      // Check if dialog is already open
      const dialog = await ProfileObject.editDialog;
      const isOpen = await dialog.isDisplayed().catch(() => false);

      if (!isOpen) {
        const editButton = await ProfileObject.editButton;
        await editButton.waitForDisplayed({ timeout: 5000 });
        await editButton.click();
        await browser.pause(500);
        await dialog.waitForDisplayed({ timeout: 5000 });
      }
    } catch (e) {
      // Try clicking the button again with scroll into view
      const editButton = await ProfileObject.editButton;
      await editButton.scrollIntoView();
      await browser.pause(300);
      await editButton.click();
      await browser.pause(500);
    }
  }

  /**
   * Switch to password tab
   */
  async switchToPasswordTab() {
    const passwordTab = await ProfileObject.passwordTabTrigger;
    await passwordTab.waitForDisplayed({ timeout: 5000 });
    await passwordTab.click();
    await browser.pause(300);
  }

  /**
   * Switch to profile tab
   */
  async switchToProfileTab() {
    const profileTab = await ProfileObject.profileTabTrigger;
    await profileTab.waitForDisplayed({ timeout: 5000 });
    await profileTab.click();
    await browser.pause(300);
  }

  /**
   * Enter email in profile form
   */
  async enterEmail(email) {
    const emailInput = await ProfileObject.emailInput;
    await emailInput.waitForDisplayed({ timeout: 5000 });
    await emailInput.clearValue();
    await emailInput.setValue(email);
  }

  /**
   * Enter username in profile form
   */
  async enterUsername(username) {
    const usernameInput = await ProfileObject.usernameInput;
    await usernameInput.waitForDisplayed({ timeout: 5000 });
    await usernameInput.clearValue();
    await usernameInput.setValue(username);
  }

  /**
   * Click save changes button
   */
  async clickSaveChanges() {
    const saveButton = await ProfileObject.saveProfileButton;
    await saveButton.waitForDisplayed({ timeout: 5000 });
    await saveButton.click();
    await browser.pause(1000); // Wait for save operation
  }

  /**
   * Enter current password
   */
  async enterCurrentPassword(password) {
    const input = await ProfileObject.oldPasswordInput;
    await input.waitForDisplayed({ timeout: 5000 });
    await input.clearValue();
    await input.setValue(password);
  }

  /**
   * Enter new password
   */
  async enterNewPassword(password) {
    const input = await ProfileObject.newPasswordInput;
    await input.waitForDisplayed({ timeout: 5000 });
    await input.clearValue();
    await input.setValue(password);
  }

  /**
   * Enter confirm password
   */
  async enterConfirmPassword(password) {
    const input = await ProfileObject.confirmPasswordInput;
    await input.waitForDisplayed({ timeout: 5000 });
    await input.clearValue();
    await input.setValue(password);
  }

  /**
   * Toggle password visibility for current password
   */
  async toggleCurrentPasswordVisibility() {
    const eyeIcon = await ProfileObject.currentPasswordEyeIcon;
    await eyeIcon.waitForDisplayed({ timeout: 5000 });
    await eyeIcon.click();
    await browser.pause(300);
  }

  /**
   * Toggle password visibility for new password
   */
  async toggleNewPasswordVisibility() {
    const eyeIcon = await ProfileObject.newPasswordEyeIcon;
    await eyeIcon.waitForDisplayed({ timeout: 5000 });
    await eyeIcon.click();
    await browser.pause(300);
  }

  /**
   * Toggle password visibility for confirm password
   */
  async toggleConfirmPasswordVisibility() {
    const eyeIcon = await ProfileObject.confirmPasswordEyeIcon;
    await eyeIcon.waitForDisplayed({ timeout: 5000 });
    await eyeIcon.click();
    await browser.pause(300);
  }

  /**
   * Click change password button
   */
  async clickChangePassword() {
    const changePasswordButton = await ProfileObject.submitChangePasswordButton;
    await changePasswordButton.waitForDisplayed({ timeout: 5000 });
    await changePasswordButton.click();
    await browser.pause(1000); // Wait for change password operation
  }

  /**
   * Check if element is visible
   */
  async isElementVisible(element) {
    try {
      return await element.isDisplayed();
    } catch (e) {
      return false;
    }
  }

  /**
   * Get password field type (to check if password is visible or hidden)
   */
  async getPasswordFieldType(inputElement) {
    return await inputElement.getAttribute("type");
  }

  /**
   * Check if password is visible
   */
  async isPasswordVisible(inputElement) {
    const type = await this.getPasswordFieldType(inputElement);
    return type === "text";
  }

  /**
   * Wait for and verify success message
   */
  async waitForSuccessMessage() {
    const toast = await ProfileObject.successToast;
    await toast.waitForDisplayed({ timeout: 5000 });
    return await toast.getText();
  }

  /**
   * Wait for and verify error message
   */
  async waitForErrorMessage() {
    const toast = await ProfileObject.errorToast;
    await toast.waitForDisplayed({ timeout: 5000 });
    return await toast.getText();
  }

  /**
   * Close dialog
   */
  async closeDialog() {
    try {
      // Try pressing Escape key first (most reliable)
      await browser.keys("Escape");
      await browser.pause(500);

      // Verify dialog is closed
      const dialog = await ProfileObject.editDialog;
      const isClosed = !(await dialog.isDisplayed().catch(() => false));

      if (!isClosed) {
        const closeButton = await ProfileObject.closeDialogButton;
        if (await closeButton.isDisplayed().catch(() => false)) {
          await closeButton.click();
          await browser.pause(500);
        }
      }
    } catch (e) {
      // If all else fails, press Escape multiple times
      await browser.keys(["Escape", "Escape"]);
      await browser.pause(500);
    }
  }

  /**
   * Upload avatar image
   */
  async uploadAvatar(imagePath) {
    const fileInput = await ProfileObject.avatarInput;
    await fileInput.waitForDisplayed({ timeout: 5000 });
    // Set the file path
    await fileInput.setValue(imagePath);
    await browser.pause(500); // Wait for file upload
  }

  /**
   * Get element text
   */
  async getElementText(element) {
    return await element.getText();
  }

  /**
   * Verify profile card is displayed
   */
  async isProfileCardDisplayed() {
    const profileCard = await ProfileObject.profileNameHeader;
    try {
      return await profileCard.isDisplayed();
    } catch (e) {
      return false;
    }
  }

  /**
   * Check if element is enabled
   */
  async isElementEnabled(element) {
    try {
      return await element.isEnabled();
    } catch (e) {
      return false;
    }
  }

  /**
   * Refresh the page
   */
  async refreshPage() {
    await browser.refresh();
    await browser.pause(2000); // Wait for page to load
  }
}

module.exports = new ProfileHelper();
