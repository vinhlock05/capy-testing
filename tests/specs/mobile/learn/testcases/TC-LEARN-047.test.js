/**
 * TC-LEARN-047: Verify "Kiểm tra" button is enabled when input is entered
 * 
 * Preconditions:
 * Listening & Input screen is displayed
 * 
 * Steps:
 * 1. Enter valid input into text field
 * 2. Observe "Kiểm tra" button
 * 
 * Expected: Button is enabled
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-047: Check Button Enabled With Input', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToFlashcard();
        await LearnHelpers.clickContinueButton(); // Go to listening screen
    });

    it('should have "Kiểm tra" button enabled when input is entered', async () => {
        // Step 1: Enter some text
        await LearnHelpers.enterAnswer('test');

        // Step 2: Verify check button is enabled
        const isEnabled = await LearnHelpers.isCheckButtonEnabled();
        expect(isEnabled).toBe(true);
        console.log('"Kiểm tra" button is enabled when input has text');
        
        console.log('TC-LEARN-047: PASSED');
    });
});
