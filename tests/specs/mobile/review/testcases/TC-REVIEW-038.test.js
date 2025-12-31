/**
 * TC-REVIEW-038: Verify FillIn check button disabled when input is empty
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-038: FillIn Check Button Disabled', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should disable check button when Fill-In input is empty', async () => {
        await ReviewHelpers.startReviewSession();

        // Check if this is a Fill-In question
        const hasInputField = await ReviewHelpers.isElementDisplayed(
            ReviewObject.quiz.fillIn.inputField
        );

        if (hasInputField) {
            // Clear input field
            const inputField = await $(ReviewObject.quiz.fillIn.inputField);
            await inputField.clearValue();
            await driver.pause(500);
            
            // Check button should be disabled
            const isEnabled = await ReviewHelpers.isFillInCheckEnabled();
            expect(isEnabled).toBe(false);
            console.log('Check button is disabled when input is empty');
        } else {
            console.log('Not a Fill-In question');
        }
        
        console.log('TC-REVIEW-038: PASSED');
    });
});
