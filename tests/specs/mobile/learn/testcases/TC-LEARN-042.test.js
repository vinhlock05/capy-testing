/**
 * TC-LEARN-042: Verify when clicking "Tiếp tục" button, the system navigates to Listening & Input screen
 * 
 * Preconditions:
 * Flashcard screen is displayed
 * 
 * Steps:
 * 1. Tap "Tiếp tục" button
 * 2. Observe displayed screen
 * 
 * Expected: Navigate to Listening & Input screen
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-042: Click "Tiếp tục" Button', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToFlashcard();
    });

    it('should navigate to Listening & Input screen when clicking "Tiếp tục"', async () => {
        // Step 1: Click "Tiếp tục" button
        await LearnHelpers.clickContinueButton();

        // Step 2: Verify Listening & Input screen is displayed
        const answerInput = await $(LearnObject.listeningScreen.answerInput);
        await expect(answerInput).toBeDisplayed();
        console.log('Listening & Input screen displayed');
        
        // Verify audio button is available
        const speakerBtn = await $(LearnObject.listeningScreen.audio.speakerNormalBtn);
        await expect(speakerBtn).toBeDisplayed();
        console.log('Speaker button is displayed');
        
        console.log('TC-LEARN-042: PASSED');
    });
});
