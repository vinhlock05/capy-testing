class LoginPage {
  get username() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get loginBtn() {
    return $('button[type="submit"]');
  }

  get eyeIcon() {
    return $("//input[@id='password']/following-sibling::button");
  }

  get toast() {
    return $("li[data-sonner-toast] div[data-title]");
  }

  get toast() {
    return $("li[data-sonner-toast] div[data-title]");
  }

  async getToastMessage() {
    await this.toast.waitForDisplayed({ timeout: 5000 });
    return this.toast.getText();
  }

  async login(username, password) {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.loginBtn.click();
  }

  async enterUsername(value) {
    await this.username.click();
    await this.username.setValue(value);
  }

  async enterPassword(value) {
    await this.password.click();
    await this.password.setValue(value);
  }
}

module.exports = new LoginPage();
