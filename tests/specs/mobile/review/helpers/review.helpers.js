/**
 * Review Module - Common Helpers
 * Các hàm helper dùng chung cho test Ôn tập
 */

const ReviewObject = require('../object/review.object');
const ReviewData = require('../data/review.data');

const APP_PACKAGE = 'com.example.capyvocab_fe';

const ReviewHelpers = {

    // ============================================
    // APP CONTROL
    // ============================================

    async restartApp() {
        try {
            await driver.terminateApp(APP_PACKAGE);
        } catch (e) { /* Ignore if not running */ }
        
        await driver.activateApp(APP_PACKAGE);
        await driver.pause(3000);
    },

    async loginAsUser() {
        await driver.pause(2000);
        const usernameInput = await $(ReviewObject.login.usernameInput);
        if (await usernameInput.isDisplayed()) {
            await usernameInput.setValue(ReviewData.login.username);
            const passwordInput = await $(ReviewObject.login.passwordInput);
            await passwordInput.setValue(ReviewData.login.password);
            const loginBtn = await $(ReviewObject.login.loginButton);
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

    // ============================================
    // NAVIGATION
    // ============================================

    /**
     * Navigate từ Main Screen đến Review Overview
     */
    async navigateToReviewOverview() {
        try {
            const reviewBtn = await $(ReviewObject.mainScreen.reviewButton);
            await reviewBtn.click();
            await driver.pause(2000);
        } catch (e) {
            console.log('Navigation to Review failed:', e.message);
            throw e;
        }
    },

    /**
     * Start review session (click "Bắt đầu ôn tập")
     */
    async startReviewSession() {
        await this.navigateToReviewOverview();
        
        const startBtn = await $(ReviewObject.overview.startReviewButton);
        await startBtn.click();
        await driver.pause(2000);
    },

    /**
     * Ensure đang ở Main Screen
     */
    async ensureOnMainScreen() {
        const reviewBtn = await $(ReviewObject.mainScreen.reviewButton);
        
        try {
            if (await reviewBtn.isDisplayed()) return true;
        } catch (e) {}
        
        for (let i = 0; i < 5; i++) {
            await this.pressBack();
            try {
                if (await reviewBtn.isDisplayed()) return true;
            } catch (e) {}
        }
        
        await this.restartApp();
        await this.loginAsUser();
        return true;
    },

    // ============================================
    // QUIZ ACTIONS
    // ============================================

    /**
     * Select multiple choice option by index (1-4)
     */
    async selectMultipleChoiceOption(index) {
        let optionSelector;
        switch (index) {
            case 1:
                optionSelector = ReviewObject.quiz.multipleChoice.option1;
                break;
            case 2:
                optionSelector = ReviewObject.quiz.multipleChoice.option2;
                break;
            case 3:
                optionSelector = ReviewObject.quiz.multipleChoice.option3;
                break;
            case 4:
                optionSelector = ReviewObject.quiz.multipleChoice.option4;
                break;
            default:
                throw new Error(`Invalid option index: ${index}`);
        }
        
        const option = await $(optionSelector);
        await option.click();
        await driver.pause(1000);
    },

    /**
     * Select True/False answer
     * @param {boolean} isTrue - true for "Đúng", false for "Sai"
     */
    async selectTrueFalse(isTrue) {
        const btn = isTrue 
            ? await $(ReviewObject.quiz.trueFalse.trueButton)
            : await $(ReviewObject.quiz.trueFalse.falseButton);
        await btn.click();
        await driver.pause(1000);
    },

    /**
     * Enter answer in Fill-In question
     */
    async enterFillInAnswer(answer) {
        const input = await $(ReviewObject.quiz.fillIn.inputField);
        await input.clearValue();
        await input.setValue(answer);
        await driver.pause(500);
    },

    /**
     * Click check button in Fill-In question
     */
    async clickFillInCheck() {
        const checkBtn = await $(ReviewObject.quiz.fillIn.checkButton);
        await checkBtn.click();
        await driver.pause(1000);
    },

    /**
     * Submit Fill-In answer
     */
    async submitFillInAnswer(answer) {
        await this.enterFillInAnswer(answer);
        await this.clickFillInCheck();
    },

    /**
     * Check if Fill-In check button is enabled
     */
    async isFillInCheckEnabled() {
        const checkBtn = await $(ReviewObject.quiz.fillIn.checkButton);
        return await checkBtn.isEnabled();
    },

    /**
     * Click audio icon in Listen and Choose
     */
    async clickAudioIcon() {
        const audioIcon = await $(ReviewObject.quiz.listenChoose.audioIcon);
        await audioIcon.click();
        await driver.pause(500);
    },

    // ============================================
    // COMPLETION ACTIONS
    // ============================================

    /**
     * Click confirm on completion dialog
     */
    async confirmCompletion() {
        const continueBtn = await $(ReviewObject.completion.continueButton);
        await continueBtn.click();
        await driver.pause(1000);
    },

    // ============================================
    // EXIT DIALOG ACTIONS
    // ============================================

    /**
     * Confirm exit when warning dialog appears
     */
    async confirmExit() {
        try {
            const confirmBtn = await $(ReviewObject.exitDialog.confirmButton);
            if (await confirmBtn.isDisplayed()) {
                await confirmBtn.click();
                await driver.pause(1000);
            }
        } catch (e) {}
    },

    /**
     * Cancel exit when warning dialog appears
     */
    async cancelExit() {
        try {
            const cancelBtn = await $(ReviewObject.exitDialog.cancelButton);
            if (await cancelBtn.isDisplayed()) {
                await cancelBtn.click();
                await driver.pause(500);
            }
        } catch (e) {}
    },

    // ============================================
    // VALIDATION HELPERS
    // ============================================

    async isElementDisplayed(selector) {
        try {
            const element = await $(selector);
            return await element.isDisplayed();
        } catch (e) {
            return false;
        }
    },

    async getElementText(selector) {
        try {
            const element = await $(selector);
            return await element.getText();
        } catch (e) {
            return '';
        }
    },

    async waitForElement(selector, timeout = 5000) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
    },

    /**
     * Get progress bar value
     */
    async getProgressValue() {
        try {
            const progressText = await $(ReviewObject.quiz.progressText);
            return await progressText.getText();
        } catch (e) {
            return '';
        }
    },

    /**
     * Check if on quiz screen
     */
    async isOnQuizScreen() {
        return await this.isElementDisplayed(ReviewObject.quiz.question.container);
    },

    /**
     * Check if on completion screen
     */
    async isOnCompletionScreen() {
        return await this.isElementDisplayed(ReviewObject.completion.container);
    },
};

module.exports = ReviewHelpers;
