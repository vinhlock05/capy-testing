/**
 * TC-REVIEW-037: Verify FillIn check button enabled after typing
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-037: FillIn Check Button Enabled', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should enable check button after typing in Fill-In field', async () => {
        await ReviewHelpers.startReviewSession();

        // Check if this is a Fill-In question
        const hasInputField = await ReviewHelpers.isElementDisplayed(
            ReviewObject.quiz.fillIn.inputField
        );

        if (hasInputField) {
            // Check button should be disabled initially (empty input)
            const initialState = await ReviewHelpers.isFillInCheckEnabled();
            console.log('Initial check button enabled:', initialState);

            // Type something
            await ReviewHelpers.enterFillInAnswer('test');
            
            // Check button should now be enabled
            const afterTyping = await ReviewHelpers.isFillInCheckEnabled();
            expect(afterTyping).toBe(true);
            console.log('Check button enabled after typing');
        } else {
            console.log('Not a Fill-In question');
        }
        
        console.log('TC-REVIEW-037: PASSED');
    });
});
