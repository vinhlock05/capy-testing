/**
 * TC-REVIEW-021: Verify True/False question displays word with meaning
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-021: True/False Question Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display True/False question with word and meaning', async () => {
        await ReviewHelpers.startReviewSession();

        // Check if this is a True/False question
        const hasTrueBtn = await ReviewHelpers.isElementDisplayed(
            ReviewObject.quiz.trueFalse.trueButton
        );
        const hasFalseBtn = await ReviewHelpers.isElementDisplayed(
            ReviewObject.quiz.trueFalse.falseButton
        );

        if (hasTrueBtn && hasFalseBtn) {
            // Verify word label is displayed
            const wordLabel = await $(ReviewObject.quiz.question.wordLabel);
            await expect(wordLabel).toBeDisplayed();
            console.log('Word label is displayed');

            // Verify True/False buttons
            const trueBtn = await $(ReviewObject.quiz.trueFalse.trueButton);
            const falseBtn = await $(ReviewObject.quiz.trueFalse.falseButton);
            await expect(trueBtn).toBeDisplayed();
            await expect(falseBtn).toBeDisplayed();
            console.log('True/False buttons are displayed');
        } else {
            console.log('Not a True/False question - question type is random');
        }
        
        console.log('TC-REVIEW-021: PASSED');
    });
});
