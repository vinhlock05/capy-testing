/**
 * TC-REVIEW-045: Verify completion summary dialog displays after all questions completed
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-045: Completion Summary Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display completion summary after all questions', async () => {
        await ReviewHelpers.startReviewSession();

        // Keep answering until completion
        let maxAttempts = 20;
        let attempts = 0;

        while (attempts < maxAttempts) {
            const isComplete = await ReviewHelpers.isOnCompletionScreen();
            if (isComplete) {
                break;
            }

            // Try to answer current question
            if (await ReviewHelpers.isElementDisplayed(ReviewObject.quiz.multipleChoice.option1)) {
                await ReviewHelpers.selectMultipleChoiceOption(1);
            } else if (await ReviewHelpers.isElementDisplayed(ReviewObject.quiz.trueFalse.trueButton)) {
                await ReviewHelpers.selectTrueFalse(true);
            } else if (await ReviewHelpers.isElementDisplayed(ReviewObject.quiz.fillIn.inputField)) {
                await ReviewHelpers.submitFillInAnswer('test');
            } else if (await ReviewHelpers.isElementDisplayed(ReviewObject.quiz.multipleChoice.option1)) {
                await ReviewHelpers.selectMultipleChoiceOption(1);
            }

            await driver.pause(1500);
            attempts++;
        }

        // Verify completion screen
        const completionContainer = await $(ReviewObject.completion.container);
        await expect(completionContainer).toBeDisplayed();
        console.log('Completion summary is displayed');
        
        console.log('TC-REVIEW-045: PASSED');
    });
});
