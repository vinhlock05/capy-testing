/**
 * Topic Management - Common Helpers
 */

const AdminObject = require('../object/admin.object');
const AdminData = require('../data/admin.data');

const TopicHelpers = {
    
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
    
    async navigateToTopicManagement() {
        await this.ensureOnMainScreen();
        const menuBtn = await $(AdminObject.menu.menu);
        await menuBtn.click();
        await driver.pause(1000);
        
        const topicMenu = await $(AdminObject.menu.topicManagement);
        await topicMenu.click();
        await driver.pause(2000);
    },
    
    async openAddTopicDialog() {
        const addBtn = await $(AdminObject.topicManagement.addTopicButton);
        await addBtn.click();
        await driver.pause(1000);
    },
    
    async openEditTopicDialog() {
        const editBtn = await $(AdminObject.topicManagement.editButton);
        await editBtn.click();
        await driver.pause(1000);
    },
    
    async closeDialog() {
        try {
            const cancelBtn = await $(AdminObject.topicManagement.addDialog.cancelBtn);
            if (await cancelBtn.isDisplayed()) {
                await cancelBtn.click();
                await driver.pause(500);
                return;
            }
        } catch (e) {}
        
        try {
            const cancelBtn = await $(AdminObject.topicManagement.editDialog.cancelBtn);
            if (await cancelBtn.isDisplayed()) {
                await cancelBtn.click();
                await driver.pause(500);
                return;
            }
        } catch (e) {}
        
        await this.pressBack();
    },
    
    async fillTopicForm(title, description) {
        const titleInput = await $(AdminObject.topicManagement.inputTopicName);
        await titleInput.clearValue();
        await titleInput.setValue(title);
        
        const descInput = await $(AdminObject.topicManagement.inputTopicDescription);
        await descInput.clearValue();
        await descInput.setValue(description);
        
        await driver.pause(500);
    },
};

module.exports = TopicHelpers;
