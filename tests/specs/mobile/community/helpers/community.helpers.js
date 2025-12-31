/**
 * Community Module - Common Helpers
 * Các hàm helper dùng chung cho test Cộng đồng
 */

const CommunityObject = require('../object/community.object');
const CommunityData = require('../data/community.data');

const APP_PACKAGE = 'com.example.capyvocab_fe';

const CommunityHelpers = {

    // ============================================
    // APP CONTROL
    // ============================================

    async restartApp() {
        try {
            await driver.terminateApp(APP_PACKAGE);
        } catch (e) {}
        
        await driver.activateApp(APP_PACKAGE);
        await driver.pause(3000);
    },

    async loginAsUser() {
        await driver.pause(2000);
        const usernameInput = await $(CommunityObject.login.usernameInput);
        if (await usernameInput.isDisplayed()) {
            await usernameInput.setValue(CommunityData.login.username);
            const passwordInput = await $(CommunityObject.login.passwordInput);
            await passwordInput.setValue(CommunityData.login.password);
            const loginBtn = await $(CommunityObject.login.loginButton);
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
     * Navigate to Community screen
     */
    async navigateToCommunity() {
        try {
            const communityBtn = await $(CommunityObject.mainScreen.communityButton);
            await communityBtn.click();
            await driver.pause(2000);
        } catch (e) {
            console.log('Navigation to Community failed:', e.message);
            throw e;
        }
    },

    /**
     * Navigate to Post Detail (click on comment button of first post)
     */
    async navigateToPostDetail() {
        await this.navigateToCommunity();
        
        // Click comment button on post card to go to detail with comment input visible
        const commentBtn = await $(CommunityObject.community.postCard.commentButton);
        await commentBtn.click();
        await driver.pause(2000);
    },

    /**
     * Navigate to Create Post screen
     */
    async navigateToCreatePost() {
        await this.navigateToCommunity();
        
        // First, open the FAB menu
        const openFab = await $(CommunityObject.community.openFAB);
        await openFab.click();
        await driver.pause(500);

        // Then click Create Post
        const fab = await $(CommunityObject.community.createPostFAB);
        await fab.click();
        await driver.pause(2000);
    },

    /**
     * Ensure on Main Screen
     */
    async ensureOnMainScreen() {
        const communityBtn = await $(CommunityObject.mainScreen.communityButton);
        
        try {
            if (await communityBtn.isDisplayed()) return true;
        } catch (e) {}
        
        for (let i = 0; i < 5; i++) {
            await this.pressBack();
            try {
                if (await communityBtn.isDisplayed()) return true;
            } catch (e) {}
        }
        
        await this.restartApp();
        await this.loginAsUser();
        return true;
    },

    // ============================================
    // POST ACTIONS
    // ============================================

    /**
     * Click on post options button (3 dots)
     */
    async openPostOptions() {
        const optionsBtn = await $(CommunityObject.community.postCard.optionsButton);
        await optionsBtn.click();
        await driver.pause(500);
    },

    /**
     * Like a post
     */
    async likePost() {
        const likeBtn = await $(CommunityObject.community.postCard.likeButton);
        await likeBtn.click();
        await driver.pause(500);
    },

    /**
     * Click Edit button from options menu
     */
    async clickEdit() {
        const editBtn = await $(CommunityObject.postOptions.editButton);
        await editBtn.click();
        await driver.pause(1000);
    },

    /**
     * Click Report button from options menu
     */
    async clickReport() {
        const reportBtn = await $(CommunityObject.postOptions.reportButton);
        await reportBtn.click();
        await driver.pause(1000);
    },

    // ============================================
    // COMMENT ACTIONS
    // ============================================

    /**
     * Enter comment
     */
    async enterComment(text) {
        const input = await $(CommunityObject.comments.inputField);
        await input.clearValue();
        await input.setValue(text);
        await driver.pause(500);
    },

    /**
     * Submit comment
     */
    async submitComment() {
        const submitBtn = await $(CommunityObject.comments.submitButton);
        await submitBtn.click();
        await driver.pause(1000);
    },

    /**
     * Post a comment
     */
    async postComment(text) {
        await this.enterComment(text);
        await this.submitComment();
    },

    /**
     * Check if submit comment button is enabled
     */
    async isCommentSubmitEnabled() {
        const submitBtn = await $(CommunityObject.comments.submitButton);
        return await submitBtn.isEnabled();
    },

    /**
     * Expand replies
     */
    async expandReplies() {
        const expandBtn = await $(CommunityObject.comments.parentComment.expandReplies);
        await expandBtn.click();
        await driver.pause(1000);
    },

    // ============================================
    // REPORT ACTIONS
    // ============================================

    /**
     * Fill report form
     */
    async fillReportForm(content) {
        // Enter content (no reason dropdown in this app)
        const contentInput = await $(CommunityObject.reportForm.contentInput);
        await contentInput.setValue(content);
        await driver.pause(500);
    },

    /**
     * Submit report
     */
    async submitReport() {
        const submitBtn = await $(CommunityObject.reportForm.submitButton);
        await submitBtn.click();
        await driver.pause(1000);
    },

    // ============================================
    // POST FORM ACTIONS
    // ============================================

    /**
     * Fill post form
     */
    async fillPostForm(content, tags) {
        const contentInput = await $(CommunityObject.postForm.contentInput);
        await contentInput.setValue(content);
        await driver.pause(500);

        if (tags) {
            const tagsInput = await $(CommunityObject.postForm.tagsInput);
            await tagsInput.setValue(tags);
            await driver.pause(500);
        }
    },

    /**
     * Submit post
     */
    async submitPost() {
        const submitBtn = await $(CommunityObject.postForm.submitButton);
        await submitBtn.click();
        await driver.pause(2000);
    },

    // ============================================
    // SCROLL ACTIONS
    // ============================================

    /**
     * Scroll down to load more posts
     */
    async scrollDown() {
        await driver.touchAction([
            { action: 'press', x: 500, y: 1500 },
            { action: 'wait', ms: 500 },
            { action: 'moveTo', x: 500, y: 500 },
            { action: 'release' }
        ]);
        await driver.pause(1500);
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
     * Check if on Community screen
     */
    async isOnCommunityScreen() {
        return await this.isElementDisplayed(CommunityObject.community.createPostFAB);
    },

    /**
     * Check if on Post Detail screen
     */
    async isOnPostDetail() {
        return await this.isElementDisplayed(CommunityObject.postDetail.content);
    },
};

module.exports = CommunityHelpers;
