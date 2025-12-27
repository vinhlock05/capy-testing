/**
 * User Management - Common Helpers
 * Shared functions for all user management tests
 */

const AdminObject = require('../object/admin.object');
const AdminData = require('../data/admin.data');

const UserHelpers = {
    
    /**
     * Login as Admin
     */
    async loginAsAdmin() {
        await driver.pause(2000);
        const usernameInput = await $(AdminObject.login.usernameInput);
        await usernameInput.setValue(AdminData.login.validAdmin.username);
        
        const passwordInput = await $(AdminObject.login.passwordInput);
        await passwordInput.setValue(AdminData.login.validAdmin.password);
        
        const loginBtn = await $(AdminObject.login.loginButton);
        await loginBtn.click();
        await driver.pause(3000);
    },
    
    /**
     * Press back button
     */
    async pressBack() {
        await driver.back();
        await driver.pause(1000);
    },
    
    /**
     * Ensure we're on main screen (not in dialog or sub-screen)
     */
    async ensureOnMainScreen() {
        let attempts = 0;
        const maxAttempts = 3;
        
        while (attempts < maxAttempts) {
            try {
                const menuBtn = await $(AdminObject.menu.menu);
                const isDisplayed = await menuBtn.isDisplayed();
                if (isDisplayed) {
                    return true;
                }
            } catch (e) {}
            
            await this.pressBack();
            attempts++;
        }
        return false;
    },
    
    /**
     * Navigate to User Management screen
     */
    async navigateToUserManagement() {
        await this.ensureOnMainScreen();
        
        const menuBtn = await $(AdminObject.menu.menu);
        await menuBtn.click();
        await driver.pause(1000);
        
        const userMenu = await $(AdminObject.menu.userManagement);
        await userMenu.click();
        await driver.pause(2000);
    },
    
    /**
     * Open Add User Dialog
     */
    async openAddUserDialog() {
        const addBtn = await $(AdminObject.userManagement.addUserButton);
        await addBtn.click();
        await driver.pause(1000);
    },
    
    /**
     * Open Edit User Dialog
     */
    async openEditUserDialog() {
        try {
            const expandBtn = await $(AdminObject.userManagement.expandBtn);
            if (await expandBtn.isDisplayed()) {
                await expandBtn.click();
                await driver.pause(500);
            }
        } catch (e) {}
        
        const editBtn = await $(AdminObject.userManagement.editButton);
        await editBtn.click();
        await driver.pause(1000);
    },
    
    /**
     * Close any open dialog
     */
    async closeDialog() {
        try {
            const cancelBtn = await $(AdminObject.userManagement.addDialog.cancelBtn);
            if (await cancelBtn.isDisplayed()) {
                await cancelBtn.click();
                await driver.pause(500);
                return;
            }
        } catch (e) {}
        
        try {
            const cancelBtn = await $(AdminObject.userManagement.editDialog.cancelBtn);
            if (await cancelBtn.isDisplayed()) {
                await cancelBtn.click();
                await driver.pause(500);
                return;
            }
        } catch (e) {}
        
        await this.pressBack();
    },
    
    /**
     * Fill User Form
     */
    async fillUserForm(username, email, password, confirmPassword, role = 'User') {
        const usernameInput = await $(AdminObject.userManagement.inputUsername);
        await usernameInput.clearValue();
        await usernameInput.setValue(username);
        
        const emailInput = await $(AdminObject.userManagement.inputEmail);
        await emailInput.clearValue();
        await emailInput.setValue(email);
        
        const passwordInput = await $(AdminObject.userManagement.inputPassword);
        await passwordInput.clearValue();
        await passwordInput.setValue(password);
        
        const confirmInput = await $(AdminObject.userManagement.inputConfirmPassword);
        await confirmInput.clearValue();
        await confirmInput.setValue(confirmPassword);
        
        const dropdown = await $(AdminObject.userManagement.dropdownRole);
        await dropdown.click();
        await driver.pause(500);
        
        if (role === 'Admin') {
            await $(AdminObject.userManagement.Admin).click();
        } else {
            await $(AdminObject.userManagement.User).click();
        }
        
        await driver.pause(500);
    },
};

module.exports = UserHelpers;
