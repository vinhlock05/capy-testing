class LogoutPage {
  get logoutBtn() {
    return $("button*=Logout");
  }

  get confirmationDialog() {
    return $(".confirmation-dialog"); // Assuming dialog has class 'confirmation-dialog'
  }

  get confirmLogoutBtn() {
    return $("#confirm-logout"); // Assuming confirm button has id 'confirm-logout'
  }

  get cancelBtn() {
    return $("#cancel-logout"); // Assuming cancel button has id 'cancel-logout'
  }

  get dialogMessage() {
    return $(".dialog-message"); // Assuming message has class 'dialog-message'
  }

  get toast() {
    return $("li[data-sonner-toast] div[data-title]");
  }

  async getToastMessage() {
    await this.toast.waitForDisplayed({ timeout: 5000 });
    return this.toast.getText();
  }

  async clickLogout() {
    await this.logoutBtn.waitForClickable();
    await this.logoutBtn.click();
  }

  async confirmLogout() {
    await this.confirmLogoutBtn.waitForClickable();
    await this.confirmLogoutBtn.click();
  }

  async cancelLogout() {
    await this.cancelBtn.waitForClickable();
    await this.cancelBtn.click();
  }

  async isConfirmationDialogDisplayed() {
    return this.confirmationDialog.waitForDisplayed({ timeout: 5000 });
  }
}

module.exports = new LogoutPage();
