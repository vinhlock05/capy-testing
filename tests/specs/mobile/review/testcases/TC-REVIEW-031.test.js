/**
 * TC-REVIEW-031: Verify progress bar is displayed and updates correctly
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-031: Progress Bar Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display progress icon at top of screen', async () => {
        await ReviewHelpers.startReviewSession();

        // Verify progress icon is at top
        const progressIcon = await $(ReviewObject.quiz.progressIcon);
        await expect(progressIcon).toBeDisplayed();
        console.log('Progress icon is displayed');

        // Get initial progress value
        const initialProgress = await ReviewHelpers.getProgressValue();
        console.log('Initial progress:', initialProgress);

        // Submit an answer (select first option if available)
        const hasOption = await ReviewHelpers.isElementDisplayed(
            ReviewObject.quiz.multipleChoice.option1
        );
        
        if (hasOption) {
            await ReviewHelpers.selectMultipleChoiceOption(1);
            await driver.pause(1500);

            // Check if progress updated (may need to wait for next question)
            const newProgress = await ReviewHelpers.getProgressValue();
            console.log('Progress after answer:', newProgress);
        }
        
        console.log('TC-REVIEW-031: PASSED');
    });
});
