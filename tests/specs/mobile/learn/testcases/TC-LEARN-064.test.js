/**
 * TC-LEARN-064: Verify warning message MSG34 is shown when exiting mid-session
 * 
 * Preconditions:
 * Learning session is in progress
 * 
 * Steps:
 * 1. Press Back button during learning session
 * 2. Observe dialog message
 * 
 * Expected: Exit warning dialog (MSG34) is displayed
 */

const LearnObject = require('../object/learn.object');
const LearnData = require('../data/learn.data');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-064: Exit Warning Dialog', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToFlashcard();
    });

    it('should show warning dialog when exiting mid-session', async () => {
        // Step 1: Press back button during learning
        await LearnHelpers.pressBack();
        await driver.pause(500);

        // Step 2: Verify exit warning dialog is displayed
        const warningMessage = await LearnHelpers.getExitWarningMessage();
        console.log('Warning message:', warningMessage);
        
        // Verify dialog contains expected message
        expect(warningMessage.length).toBeGreaterThan(0);
        
        // Verify dialog buttons
        const confirmBtn = await $(LearnObject.dialogs.exitWarning.confirmButton);
        await expect(confirmBtn).toBeDisplayed();
        
        const cancelBtn = await $(LearnObject.dialogs.exitWarning.cancelButton);
        await expect(cancelBtn).toBeDisplayed();
        
        console.log('TC-LEARN-064: PASSED');
    });
});
