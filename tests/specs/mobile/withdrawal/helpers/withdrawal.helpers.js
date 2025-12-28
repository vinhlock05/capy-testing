/**
 * Withdrawal Module - Helpers
 */
const WithdrawalObject = require('../object/withdrawal.object');
const WithdrawalData = require('../data/withdrawal.data');

const APP_PACKAGE = 'com.example.capyvocab_fe';

const WithdrawalHelpers = {
    async loginAsUser() {
        const username = 'User001'; 
        const password = 'User1123';

        const usernameInput = await $(WithdrawalObject.login.usernameInput);
        if (await usernameInput.isDisplayed()) {
            await usernameInput.setValue(username);
            
            const passwordInput = await $(WithdrawalObject.login.passwordInput);
            await passwordInput.setValue(password);
            
            const loginBtn = await $(WithdrawalObject.login.loginButton);
            await loginBtn.click();
            await driver.pause(3000);
        }
    },

    async restartApp() {
        try {
            await driver.terminateApp(APP_PACKAGE);
        } catch (e) { /* Ignore if not running */ }
        
        await driver.activateApp(APP_PACKAGE);
        await driver.pause(3000); // Wait for app launch
    },

    async navigateToProfile() {
        try {
            const profileTab = await $(WithdrawalObject.profile.profileTab);
            const emailInfo = await $(WithdrawalObject.profile.emailInfo);
            
            // Check if app is running and on Profile
            if (await emailInfo.isDisplayed()) {
                return;
            }

            // Check Login screen
            const usernameInput = await $(WithdrawalObject.login.usernameInput);
            if (await usernameInput.isDisplayed()) {
                await this.loginAsUser();
                await profileTab.waitForDisplayed({ timeout: 5000 });
                await profileTab.click();
                return;
            }

            // Normal Navigation
            if (await profileTab.isDisplayed()) {
                await profileTab.click();
                await driver.pause(1000);
                return;
            }
        } catch (error) {
            console.log('App might be crashed or stuck. Restarting...');
        }

        // If all checks fail -> Restart App
        await this.restartApp();
        await this.loginAsUser();
        
        const profileTab = await $(WithdrawalObject.profile.profileTab);
        await profileTab.waitForDisplayed({ timeout: 10000 });
        await profileTab.click();
    },

    async navigateToWithdrawal() {
        try {
            // Check if already in Withdrawal Form
            const amountInput = await $(WithdrawalObject.form.amountInput);
            if (await amountInput.isDisplayed()) {
                return;
            }
        } catch (e) {
            // Element check failed, likely crash or wrong screen
        }

        // Use robust navigateToProfile (handles crash/restart)
        await this.navigateToProfile();
        
        // Then click Withdraw button
        const withdrawBtn = await $(WithdrawalObject.profile.withdrawButton);
        await withdrawBtn.waitForDisplayed({ timeout: 5000 });
        await withdrawBtn.click();
        
        // Wait specifically for form to load
        const amountInput = await $(WithdrawalObject.form.amountInput);
        await amountInput.waitForDisplayed({ timeout: 10000 });
    },
    
    async fillWithdrawalForm(amount, bank, accountNumber) {
        if (amount !== undefined) {
            const amountInput = await $(WithdrawalObject.form.amountInput);
            await amountInput.waitForDisplayed({ timeout: 5000 });
            await amountInput.clearValue();
            await amountInput.setValue(amount);
            try { await driver.hideKeyboard(); } catch (e) {} // Hide keyboard
        }

        if (bank !== undefined) {
            const bankDropdown = await $(WithdrawalObject.form.bankDropdown);
            await bankDropdown.click();
            await driver.pause(1000);
            
            // Handle bank selection
            if (bank) {
                const bankOption = await $(WithdrawalObject.form.bankOption(bank));
                await bankOption.waitForDisplayed();
                await bankOption.click();
            } else {
                // Should click outside or cancel if needed
                // For now, assuming clicking dropdown again or back might close it if false
                // but let's just do nothing if false (test case TC-REV-031 specific logic)
                if (bank === false) {
                     // Click back/outside to dismiss dropdown without selecting? 
                     // Or just don't select anything if logic allows
                     await driver.back(); // Try back to close dropdown
                }
            }
            await driver.pause(500);
        }

        if (accountNumber !== undefined) {
            const accInput = await $(WithdrawalObject.form.accountNumberInput);
            await accInput.waitForDisplayed({ timeout: 5000 });
            await accInput.clearValue();
            await accInput.setValue(accountNumber);
            try { await driver.hideKeyboard(); } catch (e) {} // Hide keyboard
        }
    },
    
    async submitWithdrawal() {
        const btn = await $(WithdrawalObject.form.submitButton);
        await btn.waitForDisplayed(); // Ensure button visible
        await btn.click();
        await driver.pause(2000); // Wait for processing
    },

    async closeDialog() {
        // Basic dialog closer if needed (e.g. click back or cancel)
        await driver.back();
    }
};

module.exports = WithdrawalHelpers;
