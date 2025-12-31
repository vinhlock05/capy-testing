/**
 * Learn Module - Common Helpers
 * Các hàm helper dùng chung cho test Học từ vựng
 */

const LearnObject = require('../object/learn.object');
const LearnData = require('../data/learn.data');

const APP_PACKAGE = 'com.example.capyvocab_fe'; // TODO: Verify app package name

const LearnHelpers = {

    // ============================================
    // APP CONTROL
    // ============================================

    /**
     * Restart app
     */
    async restartApp() {
        try {
            await driver.terminateApp(APP_PACKAGE);
        } catch (e) { /* Ignore if not running */ }
        
        await driver.activateApp(APP_PACKAGE);
        await driver.pause(3000);
    },

    /**
     * Login as user (không phải admin)
     */
    async loginAsUser() {
        await driver.pause(2000);
        // TODO: Implement login logic cho user thường
        const usernameInput = await $(LearnObject.login.usernameInput);
        if (await usernameInput.isDisplayed()) {
            await usernameInput.setValue('User001');
            const passwordInput = await $(LearnObject.login.passwordInput);
            await passwordInput.setValue('User1123');
            const loginBtn = await $(LearnObject.login.loginButton);
            await loginBtn.click();
            await driver.pause(3000);
        }
    },

    /**
     * Press back button
     */
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
     * Navigate từ Main Screen đến Course List
     */
    async navigateToCourseList() {
        try {
            const learnBtn = await $(LearnObject.mainScreen.learnVocabButton);
            await learnBtn.click();
            await driver.pause(2000);
        } catch (e) {
            console.log('Navigation to Course List failed:', e.message);
            throw e;
        }
    },

    /**
     * Navigate đến Topic List (từ Course List)
     * @param {number} courseIndex - Index của course (1-based)
     */
    async navigateToTopicList(courseIndex = 1) {
        await this.navigateToCourseList();
        
        // Click course card
        const courseCard = await $(LearnObject.courseList.firstCourseCard);
        await courseCard.click();
        await driver.pause(2000);
    },

    /**
     * Navigate đến Flashcard Screen (từ Topic List)
     * @param {number} topicIndex - Index của topic (1-based)
     */
    async navigateToFlashcard(topicIndex = 1) {
        await this.navigateToTopicList();
        
        // Click topic card
        const topicCard = await $(LearnObject.topicList.firstTopicCard);
        await topicCard.click();
        await driver.pause(2000);
    },

    /**
     * Ensure đang ở Main Screen
     */
    async ensureOnMainScreen() {
        const learnBtn = await $(LearnObject.mainScreen.learnVocabButton);
        
        try {
            if (await learnBtn.isDisplayed()) return true;
        } catch (e) {}
        
        // Try pressing back multiple times
        for (let i = 0; i < 5; i++) {
            await this.pressBack();
            try {
                if (await learnBtn.isDisplayed()) return true;
            } catch (e) {}
        }
        
        // Restart if cannot find main screen
        await this.restartApp();
        await this.loginAsUser();
        return true;
    },

    // ============================================
    // COURSE LIST ACTIONS
    // ============================================

    /**
     * Search course by title
     * @param {string} searchText - Text to search
     */
    async searchCourse(searchText) {
        const searchInput = await $(LearnObject.courseList.searchInput);
        await searchInput.clearValue();
        await searchInput.setValue(searchText);
        await driver.pause(1500); // Wait for search results
    },

    /**
     * Clear search input
     */
    async clearSearch() {
        const searchInput = await $(LearnObject.courseList.searchInput);
        await searchInput.clearValue();
        await driver.pause(1000);
    },

    /**
     * Select filter by level
     * @param {string} level - 'all' | 'beginner' | 'intermediate' | 'advanced'
     */
    async selectLevelFilter(level) {
        // First, open the filter dropdown
        const openFilterBtn = await $(LearnObject.courseList.openFilterButton);
        await openFilterBtn.click();
        await driver.pause(500);

        let filterElement;
        
        switch (level) {
            case 'all':
                filterElement = await $(LearnObject.courseList.filterAll);
                break;
            case 'beginner':
                filterElement = await $(LearnObject.courseList.filterBeginner);
                break;
            case 'intermediate':
                filterElement = await $(LearnObject.courseList.filterIntermediate);
                break;
            case 'advanced':
                filterElement = await $(LearnObject.courseList.filterAdvanced);
                break;
            default:
                throw new Error(`Invalid level filter: ${level}`);
        }
        
        await filterElement.click();
        await driver.pause(1500);
    },

    // ============================================
    // TOPIC LIST ACTIONS
    // ============================================

    /**
     * Search topic by title
     * @param {string} searchText - Text to search
     */
    async searchTopic(searchText) {
        const searchInput = await $(LearnObject.topicList.searchInput);
        await searchInput.clearValue();
        await searchInput.setValue(searchText);
        await driver.pause(1500);
    },

    /**
     * Check if topic is completed
     * @returns {Promise<boolean>}
     */
    async isTopicCompleted() {
        try {
            const completedIcon = await $(LearnObject.topicList.topicCard.completedIcon);
            return await completedIcon.isDisplayed();
        } catch (e) {
            return false;
        }
    },

    // ============================================
    // FLASHCARD ACTIONS
    // ============================================

    /**
     * Flip flashcard (tap to flip)
     */
    async flipCard() {
        const card = await $(LearnObject.flashcard.cardContainer);
        await card.click();
        await driver.pause(500); // Wait for flip animation
    },

    /**
     * Click "Đã biết" button
     */
    async clickKnownButton() {
        const knownBtn = await $(LearnObject.flashcard.knownButton);
        await knownBtn.click();
        await driver.pause(1000);
    },

    /**
     * Click "Tiếp tục" button
     */
    async clickContinueButton() {
        const continueBtn = await $(LearnObject.flashcard.continueButton);
        await continueBtn.click();
        await driver.pause(1000);
    },

    /**
     * Play audio at normal speed
     */
    async playAudioNormal() {
        const speakerBtn = await $(LearnObject.flashcard.audio.speakerNormalBtn);
        await speakerBtn.click();
        await driver.pause(500);
    },

    /**
     * Play audio at slow speed
     */
    async playAudioSlow() {
        const speakerBtn = await $(LearnObject.flashcard.audio.speakerSlowBtn);
        await speakerBtn.click();
        await driver.pause(500);
    },

    /**
     * Get current progress value
     * @returns {Promise<string>}
     */
    /**
     * Get progress value (if available)
     * Note: progressText may not exist in app, will return empty string
     */
    async getProgressValue() {
        try {
            // Try progressText first
            if (LearnObject.flashcard.progressText) {
                const progressText = await $(LearnObject.flashcard.progressText);
                if (await progressText.isDisplayed()) {
                    return await progressText.getText();
                }
            }
            // Fallback: just check if progressIcon exists
            const progressIcon = await $(LearnObject.flashcard.progressIcon);
            if (await progressIcon.isDisplayed()) {
                return 'progress-visible'; // Indicate progress is visible but no text value
            }
            return '';
        } catch (e) {
            return '';
        }
    },

    // ============================================
    // LISTENING SCREEN ACTIONS
    // ============================================

    /**
     * Enter answer in listening screen
     * @param {string} answer - Answer to enter
     */
    async enterAnswer(answer) {
        const answerInput = await $(LearnObject.listeningScreen.answerInput);
        await answerInput.clearValue();
        await answerInput.setValue(answer);
        await driver.pause(500);
    },

    /**
     * Click "Kiểm tra" button
     */
    async clickCheckButton() {
        const checkBtn = await $(LearnObject.listeningScreen.checkButton);
        await checkBtn.click();
        await driver.pause(1000);
    },

    /**
     * Submit answer (enter + check)
     * @param {string} answer - Answer to submit
     */
    async submitAnswer(answer) {
        await this.enterAnswer(answer);
        await this.clickCheckButton();
    },

    /**
     * Check if check button is enabled
     * @returns {Promise<boolean>}
     */
    async isCheckButtonEnabled() {
        const checkBtn = await $(LearnObject.listeningScreen.checkButton);
        return await checkBtn.isEnabled();
    },

    // ============================================
    // VALIDATION HELPERS
    // ============================================

    /**
     * Check if element is displayed
     * @param {string} selector - Element selector
     * @returns {Promise<boolean>}
     */
    async isElementDisplayed(selector) {
        try {
            const element = await $(selector);
            return await element.isDisplayed();
        } catch (e) {
            return false;
        }
    },

    /**
     * Get element text
     * @param {string} selector - Element selector
     * @returns {Promise<string>}
     */
    async getElementText(selector) {
        try {
            const element = await $(selector);
            return await element.getText();
        } catch (e) {
            return '';
        }
    },

    /**
     * Wait for element to be displayed
     * @param {string} selector - Element selector
     * @param {number} timeout - Timeout in ms
     */
    async waitForElement(selector, timeout = 5000) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
    },

    // ============================================
    // DIALOG HELPERS
    // ============================================

    /**
     * Confirm exit when exit warning appears
     */
    async confirmExit() {
        try {
            const confirmBtn = await $(LearnObject.dialogs.exitWarning.confirmButton);
            if (await confirmBtn.isDisplayed()) {
                await confirmBtn.click();
                await driver.pause(1000);
            }
        } catch (e) {}
    },

    /**
     * Cancel exit when exit warning appears
     */
    async cancelExit() {
        try {
            const cancelBtn = await $(LearnObject.dialogs.exitWarning.cancelButton);
            if (await cancelBtn.isDisplayed()) {
                await cancelBtn.click();
                await driver.pause(500);
            }
        } catch (e) {}
    },

    /**
     * Get exit warning message
     * @returns {Promise<string>}
     */
    async getExitWarningMessage() {
        try {
            const message = await $(LearnObject.dialogs.exitWarning.message);
            return await message.getText();
        } catch (e) {
            return '';
        }
    },
};

module.exports = LearnHelpers;
