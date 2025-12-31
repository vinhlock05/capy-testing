/**
 * TC-LEARN-030: Verify "Đã biết" and "Tiếp tục" buttons are displayed
 * 
 * Preconditions:
 * Flashcard screen is displayed
 * 
 * Steps:
 * 1. Observe action buttons below flashcard
 * 
 * Expected: Both buttons are displayed
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-030: Action Buttons Display', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToFlashcard();
    });

    it('should display "Đã biết" and "Tiếp tục" buttons', async () => {
        // Step 1: Verify "Đã biết" button
        const knownBtn = await $(LearnObject.flashcard.knownButton);
        await expect(knownBtn).toBeDisplayed();
        console.log('"Đã biết" button is displayed');

        // Step 2: Verify "Tiếp tục" button
        const continueBtn = await $(LearnObject.flashcard.continueButton);
        await expect(continueBtn).toBeDisplayed();
        console.log('"Tiếp tục" button is displayed');
        
        console.log('TC-LEARN-030: PASSED');
    });
});
