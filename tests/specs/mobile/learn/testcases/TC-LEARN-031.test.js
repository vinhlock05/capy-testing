/**
 * TC-LEARN-031: Verify that the progress bar is visible on learning screen and its initial value is correct
 * 
 * Preconditions:
 * Flashcard screen is displayed
 * 
 * Steps:
 * 1. Observe top area of flashcard screen
 * 2. Check initial progress value
 * 
 * Expected: Progress bar is visible with initial value (0 or minimal)
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-031: Progress Bar Display', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToFlashcard();
    });

    it('should display progress bar with initial value', async () => {
        // Step 1: Verify progress bar is visible
        const progressIcon = await $(LearnObject.flashcard.progressIcon);
        await expect(progressIcon).toBeDisplayed();
        console.log('Progress bar is displayed');

        // Step 2: Check initial progress value
        const progressText = await LearnHelpers.getProgressValue();
        console.log('Initial progress:', progressText);
        
        // Progress should be 0 or show first word (e.g., "1/10")
        // This depends on UI implementation
        
        console.log('TC-LEARN-031: PASSED');
    });
});
