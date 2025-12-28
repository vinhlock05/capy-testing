/**
 * Withdrawal Module - Locators
 */
const WithdrawalObject = {
    // ============================================
    // LOGIN SCREEN
    // ============================================
    login: {
        usernameInput: '//android.widget.ScrollView/android.widget.EditText[1]',
        passwordInput: '//android.widget.ScrollView/android.widget.EditText[2]',
        loginButton: '//android.widget.ScrollView/android.view.View[2]/android.widget.Button',
    },

    // Navigation/Profile
    profile: {
        profileTab: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.view.View[4]/android.view.View',
        emailInfo: '//android.widget.TextView[@text="Email: User001@gmail.com"]',
        currentBalance: '//android.widget.TextView[@text="Số dư: 0"]',
        withdrawButton: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.widget.Button',
    },
    
    // Withdrawal Form
    form: {
        amountInput: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]',
        bankDropdown: '//android.widget.Spinner',
        bankOption: (bankName) => `//android.widget.TextView[@text="${bankName}"]`, // Dynamic locator
        accountNumberInput: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]',
        submitButton: '//android.widget.Button'
    },
};

module.exports = WithdrawalObject;
