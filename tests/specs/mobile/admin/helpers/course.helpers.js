/**
 * Course Management - Common Helpers
 */

const AdminObject = require('../object/admin.object');
const AdminData = require('../data/admin.data');

const APP_PACKAGE = 'com.example.capyvocab_fe';

const CourseHelpers = {
    
    async restartApp() {
        try {
            await driver.terminateApp(APP_PACKAGE);
        } catch (e) { /* Ignore if not running */ }
        
        await driver.activateApp(APP_PACKAGE);
        await driver.pause(3000); // Wait for app launch
    },

    async loginAsAdmin() {
        await driver.pause(2000);
        const usernameInput = await $(AdminObject.login.usernameInput);
        if (await usernameInput.isDisplayed()) {
            await usernameInput.setValue(AdminData.login.validAdmin.username);
            
            const passwordInput = await $(AdminObject.login.passwordInput);
            await passwordInput.setValue(AdminData.login.validAdmin.password);
            
            const loginBtn = await $(AdminObject.login.loginButton);
            await loginBtn.click();
            await driver.pause(3000);
        }
    },
    
    async pressBack() {
        try {
            await driver.back();
        } catch (e) {}
        await driver.pause(1000);
    },
    
    async ensureOnMainScreen() {
        const menuBtn = await $(AdminObject.menu.menu);
        
        try {
            if (await menuBtn.isDisplayed()) return true;
        } catch (e) {}
        
        for (let i = 0; i < 3; i++) {
            await this.pressBack();
            try {
                if (await menuBtn.isDisplayed()) return true;
            } catch (e) {}
        }
        return false;
    },
    
    async navigateToCourseManagement() {
        let isOnMain = await this.ensureOnMainScreen();
        if (!isOnMain) {
            console.log('Cannot find Main Screen. Restarting app...');
            await this.restartApp();
            await this.loginAsAdmin();
        }
        
        try {
            const menuBtn = await $(AdminObject.menu.menu);
            await menuBtn.click();
            await driver.pause(1000);
            
            const courseMenu = await $(AdminObject.menu.courseManagement);
            await courseMenu.click();
            await driver.pause(2000);
        } catch (e) {
            console.log('Navigation failed. Retrying...');
            await this.restartApp();
            await this.loginAsAdmin();
            const menuBtn = await $(AdminObject.menu.menu);
            await menuBtn.click();
            await driver.pause(1000);
            const courseMenu = await $(AdminObject.menu.courseManagement);
            await courseMenu.click();
            await driver.pause(2000);
        }
    },
    
    async openAddCourseDialog() {
        await this.navigateToCourseManagement();
        const addBtn = await $(AdminObject.courseManagement.addCourseButton);
        await addBtn.click();
        await driver.pause(1000);
    },
    
    async openEditCourseDialog() {
        const editBtn = await $(AdminObject.courseManagement.editButton);
        await editBtn.click();
        await driver.pause(1000);
    },
    
    async closeDialog() {
        try {
            const cancelBtn = await $(AdminObject.courseManagement.addDialog.cancelBtn);
            if (await cancelBtn.isDisplayed()) {
                await cancelBtn.click();
                await driver.pause(500);
                return;
            }
        } catch (e) {}
        
        try {
            const cancelBtn = await $(AdminObject.courseManagement.editDialog.cancelBtn);
            if (await cancelBtn.isDisplayed()) {
                await cancelBtn.click();
                await driver.pause(500);
                return;
            }
        } catch (e) {}
        
        await this.pressBack();
    },
    
    async fillCourseForm(name, target, level = 'SoCap') {
        const nameInput = await $(AdminObject.courseManagement.inputCourseName);
        await nameInput.clearValue();
        await nameInput.setValue(name);
        
        const targetInput = await $(AdminObject.courseManagement.inputCourseTarget);
        await targetInput.clearValue();
        await targetInput.setValue(target);
        
        // Select level
        const dropdown = await $(AdminObject.courseManagement.dropdownType);
        await dropdown.click();
        await driver.pause(500);
        
        switch (level) {
            case 'SoCap':
                await $(AdminObject.courseManagement.optionSoCap).click();
                break;
            case 'TrungCap':
                await $(AdminObject.courseManagement.optionTrungCap).click();
                break;
            case 'CaoCap':
                await $(AdminObject.courseManagement.optionCaoCap).click();
                break;
        }
        await driver.pause(500);
    },
};

module.exports = CourseHelpers;
