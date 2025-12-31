/**
 * TC-LEARN-046: Verify "Kiểm tra" button is disabled when input is empty
 * 
 * Preconditions:
 * Listening & Input screen is displayed
 * 
 * Steps:
 * 1. Observe "Kiểm tra" button with empty input
 * 
 * Expected: Button is disabled
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-046: Check Button Disabled When Empty', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToFlashcard();
        await LearnHelpers.clickContinueButton(); // Go to listening screen
    });

    it('should have "Kiểm tra" button disabled when input is empty', async () => {
        // Step 1: Verify input is empty
        const answerInput = await $(LearnObject.listeningScreen.answerInput);
        await expect(answerInput).toBeDisplayed();

        // Step 2: Verify check button is disabled
        const isEnabled = await LearnHelpers.isCheckButtonEnabled();
        expect(isEnabled).toBe(false);
        console.log('"Kiểm tra" button is disabled when input is empty');
        
        console.log('TC-LEARN-046: PASSED');
    });
});
