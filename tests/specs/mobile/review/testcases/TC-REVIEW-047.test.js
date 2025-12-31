/**
 * TC-REVIEW-047: Verify completion summary dialog has continue button
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-047: Completion Continue Button', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display continue button on completion summary', async () => {
        await ReviewHelpers.startReviewSession();

        // Complete all questions (simplified - just check if we can reach completion)
        let maxAttempts = 20;
        let attempts = 0;

        while (attempts < maxAttempts) {
            const isComplete = await ReviewHelpers.isOnCompletionScreen();
            if (isComplete) break;

            // Answer questions
            if (await ReviewHelpers.isElementDisplayed(ReviewObject.quiz.multipleChoice.option1)) {
                await ReviewHelpers.selectMultipleChoiceOption(1);
            } else if (await ReviewHelpers.isElementDisplayed(ReviewObject.quiz.trueFalse.trueButton)) {
                await ReviewHelpers.selectTrueFalse(true);
            } else if (await ReviewHelpers.isElementDisplayed(ReviewObject.quiz.fillIn.inputField)) {
                await ReviewHelpers.submitFillInAnswer('test');
            }
            
            await driver.pause(1500);
            attempts++;
        }

        // Verify continue button (was confirmButton, now continueButton)
        const continueBtn = await $(ReviewObject.completion.continueButton);
        await expect(continueBtn).toBeDisplayed();
        console.log('Continue button is displayed');
        
        console.log('TC-REVIEW-047: PASSED');
    });
});
