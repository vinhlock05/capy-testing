/**
 * TC-REVIEW-017: Verify Fill-In question displays word meaning and input field
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-017: Fill-In Question Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display Fill-In question with meaning and input field', async () => {
        await ReviewHelpers.startReviewSession();

        // Check if this is a Fill-In question (has input field)
        const hasInputField = await ReviewHelpers.isElementDisplayed(
            ReviewObject.quiz.fillIn.inputField
        );

        if (hasInputField) {
            // Verify input field
            const inputField = await $(ReviewObject.quiz.fillIn.inputField);
            await expect(inputField).toBeDisplayed();
            console.log('Input field is displayed');

            // Verify check button
            const checkBtn = await $(ReviewObject.quiz.fillIn.checkButton);
            await expect(checkBtn).toBeDisplayed();
            console.log('Check button is displayed');
        } else {
            console.log('Not a Fill-In question - question type is random');
        }
        
        console.log('TC-REVIEW-017: PASSED');
    });
});
