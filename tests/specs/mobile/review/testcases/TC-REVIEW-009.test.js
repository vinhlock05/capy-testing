/**
 * TC-REVIEW-009: Verify start reviewing "Ôn tập ngay" button is visible when words are available
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-009: Start Review Button Visible', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
        await ReviewHelpers.navigateToReviewOverview();
    });

    it('should display "Ôn tập ngay" button when words are available', async () => {
        await driver.pause(2000);

        // Check if there are words to review
        const hasNoWordsMessage = await ReviewHelpers.isElementDisplayed(
            ReviewObject.overview.noWordsMessage
        );

        if (!hasNoWordsMessage) {
            // Words are available - verify start button is visible
            const startBtn = await $(ReviewObject.overview.startReviewButton);
            await expect(startBtn).toBeDisplayed();
            console.log('"Ôn tập ngay" button is visible');
        } else {
            console.log('No words available - start button should not be visible');
            const startBtnVisible = await ReviewHelpers.isElementDisplayed(
                ReviewObject.overview.startReviewButton
            );
            expect(startBtnVisible).toBe(false);
        }
        
        console.log('TC-REVIEW-009: PASSED');
    });
});
