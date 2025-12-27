/**
 * Word Management - Common Helpers
 */

const AdminObject = require('../object/admin.object');
const AdminData = require('../data/admin.data');

const WordHelpers = {
    
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
    
    async navigateToWordManagement() {
        await this.ensureOnMainScreen();
        const menuBtn = await $(AdminObject.menu.menu);
        await menuBtn.click();
        await driver.pause(1000);
        
        const wordMenu = await $(AdminObject.menu.wordManagement);
        await wordMenu.click();
        await driver.pause(2000);
    },
    
    async openAddWordDialog() {
        const addBtn = await $(AdminObject.wordManagement.addWordButton);
        await addBtn.click();
        await driver.pause(1000);
    },
    
    async openEditWordDialog() {
        // Assume first word in list
        await driver.pause(1000);
    },
    
    async closeDialog() {
        try {
            const cancelBtn = await $(AdminObject.wordManagement.addDialog.cancelBtn);
            if (await cancelBtn.isDisplayed()) {
                await cancelBtn.click();
                await driver.pause(500);
                return;
            }
        } catch (e) {}
        
        try {
            const cancelBtn = await $(AdminObject.wordManagement.editDialog.cancelBtn);
            if (await cancelBtn.isDisplayed()) {
                await cancelBtn.click();
                await driver.pause(500);
                return;
            }
        } catch (e) {}
        
        await this.pressBack();
    },
    
    async fillWordForm(word, pronunciation, meaning, example, exampleTrans, type = 'Noun') {
        const wordInput = await $(AdminObject.wordManagement.inputWordName);
        await wordInput.clearValue();
        await wordInput.setValue(word);
        
        const pronInput = await $(AdminObject.wordManagement.inputWordPronunciation);
        await pronInput.clearValue();
        await pronInput.setValue(pronunciation);
        
        const meaningInput = await $(AdminObject.wordManagement.inputWordMeaning);
        await meaningInput.clearValue();
        await meaningInput.setValue(meaning);
        
        const exampleInput = await $(AdminObject.wordManagement.inputWordExample);
        await exampleInput.clearValue();
        await exampleInput.setValue(example);
        
        const transInput = await $(AdminObject.wordManagement.inputWordExampleTranslation);
        await transInput.clearValue();
        await transInput.setValue(exampleTrans);
        
        // Select type
        const dropdown = await $(AdminObject.wordManagement.dropdownType);
        await dropdown.click();
        await driver.pause(500);
        
        await $(AdminObject.wordManagement[type]).click();
        await driver.pause(500);
    },
};

module.exports = WordHelpers;
