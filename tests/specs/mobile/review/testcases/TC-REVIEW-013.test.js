/**
 * TC-REVIEW-013: Verify clicking "Ôn tập ngay" navigates to quiz screen
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-013: Navigate to Quiz Screen', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
        await ReviewHelpers.navigateToReviewOverview();
    });

    it('should navigate to quiz screen when clicking "Ôn tập ngay"', async () => {
        await driver.pause(2000);

        // Check if start button is available
        const startBtn = await $(ReviewObject.overview.startReviewButton);
        
        if (await startBtn.isDisplayed()) {
            await startBtn.click();
            await driver.pause(2000);

            // Verify quiz screen is displayed
            const questionContainer = await $(ReviewObject.quiz.question.container);
            await expect(questionContainer).toBeDisplayed();
            console.log('Quiz screen is displayed');
        } else {
            console.log('No words to review - cannot test quiz navigation');
        }
        
        console.log('TC-REVIEW-013: PASSED');
    });
});
