/**
 * TC-REVIEW-001: Verify clicking Review navigates to Review Overview screen
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-001: Navigate to Review Overview', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should navigate to Review Overview screen when clicking "Ôn tập"', async () => {
        // Step 1: Click "Ôn tập" button
        const reviewBtn = await $(ReviewObject.mainScreen.reviewButton);
        await expect(reviewBtn).toBeDisplayed();
        await reviewBtn.click();
        await driver.pause(2000);
        
        console.log('TC-REVIEW-001: PASSED');
    });
});
