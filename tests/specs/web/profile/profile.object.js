class ProfileObject {
  /* ===== Profile Header ===== */
  get profileUsername() {
    return $("h1.text-2xl");
  }

  get profileEmail() {
    return $("p.text-muted-foreground");
  }

  get profileAvatar() {
    return $('[data-slot="avatar"]');
  }

  get streakDisplay() {
    return $("span*=day streak");
  }

  get totalStudyDayCard() {
    return $("p*=Tổng ngày học");
  }

  get balanceCard() {
    return $("p*=Số dư");
  }

  /* ===== Edit Dialog ===== */
  get editButton() {
    return $('button[data-slot="dialog-trigger"]');
  }

  get editDialog() {
    return $('div[role="dialog"]');
  }

  /* ===== Tabs ===== */
  get profileTabTrigger() {
    return $('button[role="tab"]*=Profile');
  }

  get passwordTabTrigger() {
    return $('button[role="tab"]*=Đổi mật khẩu');
  }

  get profileTabPanel() {
    return $('div[role="tabpanel"][id*="content-profile"]');
  }

  get passwordTabPanel() {
    return $('div[role="tabpanel"][id*="content-password"]');
  }

  /* ===== Profile Form ===== */
  get usernameInput() {
    return this.profileTabPanel.$$("input")[0];
  }

  get emailInput() {
    return this.profileTabPanel.$('input[type="email"]');
  }

  get saveProfileButton() {
    return this.profileTabPanel.$("button*=Lưu thay đổi");
  }

  /* ===== Password Form ===== */
  get oldPasswordInput() {
    return this.passwordTabPanel.$$("input")[0];
  }

  get newPasswordInput() {
    return this.passwordTabPanel.$$("input")[1];
  }

  get confirmPasswordInput() {
    return this.passwordTabPanel.$$("input")[2];
  }

  get submitChangePasswordButton() {
    return this.passwordTabPanel.$("button*=Đổi mật khẩu");
  }

  /* ===== Eye Icons (Toggle Visibility) ===== */
  get currentPasswordEyeIcon() {
    return this.oldPasswordInput.parentElement().$("button");
  }

  get newPasswordEyeIcon() {
    return this.newPasswordInput.parentElement().$("button");
  }

  get confirmPasswordEyeIcon() {
    return this.confirmPasswordInput.parentElement().$("button");
  }

  get avatarUploadButton() {
    return $('label[for="avatar-upload"]');
  }

  get avatarFileInput() {
    return $("#avatar-upload");
  }
}

module.exports = new ProfileObject();
