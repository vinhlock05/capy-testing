/**
 * Course Management - Common Helpers
 */

const AdminObject = require('../object/admin.object');
const AdminData = require('../data/admin.data');

const CourseHelpers = {
    
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
    
    async pressBack() {
        await driver.back();
        await driver.pause(1000);
    },
    
    async ensureOnMainScreen() {
        let attempts = 0;
        while (attempts < 3) {
            try {
                const menuBtn = await $(AdminObject.menu.menu);
                if (await menuBtn.isDisplayed()) return true;
            } catch (e) {}
            await this.pressBack();
            attempts++;
        }
        return false;
    },
    
    async navigateToCourseManagement() {
        await this.ensureOnMainScreen();
        const menuBtn = await $(AdminObject.menu.menu);
        await menuBtn.click();
        await driver.pause(1000);
        
        const courseMenu = await $(AdminObject.menu.courseManagement);
        await courseMenu.click();
        await driver.pause(2000);
    },
    
    async openAddCourseDialog() {
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
