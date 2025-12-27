/**
 * Word Management - Common Helpers
 */

const AdminObject = require('../object/admin.object');
const AdminData = require('../data/admin.data');

const APP_PACKAGE = 'com.example.capyvocab_fe';

const WordHelpers = {
    
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
    
    async navigateToWordManagement() {
        try {
            const addBtn = await $(AdminObject.wordManagement.addWordButton);
            if (await addBtn.isDisplayed()) return;
        } catch (e) {}

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
            
            const wordMenu = await $(AdminObject.menu.wordManagement);
            await wordMenu.click();
            await driver.pause(2000);
        } catch (e) {
            console.log('Navigation failed. Retrying...');
            await this.restartApp();
            await this.loginAsAdmin();
            const menuBtn = await $(AdminObject.menu.menu);
            await menuBtn.click();
            await driver.pause(1000);
            const wordMenu = await $(AdminObject.menu.wordManagement);
            await wordMenu.click();
            await driver.pause(2000);
        }
    },
    
    async openAddWordDialog() {
        await this.navigateToWordManagement();
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
