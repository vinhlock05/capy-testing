/**
 * TC-REVIEW-014: Verify first question appears after clicking start reviewing
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-014: First Question Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display first question after starting review', async () => {
        // Start review session
        await ReviewHelpers.startReviewSession();

        // Verify question area is displayed (using wordLabel instead of removed content)
        const wordLabel = await $(ReviewObject.quiz.question.wordLabel);
        await expect(wordLabel).toBeDisplayed();
        console.log('Question word label is displayed');

        // Verify progress icon is visible
        const progressIcon = await $(ReviewObject.quiz.progressIcon);
        await expect(progressIcon).toBeDisplayed();
        console.log('Progress icon is visible');
        
        console.log('TC-REVIEW-014: PASSED');
    });
});
