/**
 * TC-REVIEW-049: Verify exit confirmation dialog displays when exiting mid-session
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-049: Exit Confirmation Dialog', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display confirmation dialog when exiting mid-session', async () => {
        await ReviewHelpers.startReviewSession();

        // Attempt to exit (press back button)
        await ReviewHelpers.pressBack();
        await driver.pause(500);

        // Verify exit dialog is displayed
        const exitDialog = await $(ReviewObject.exitDialog.container);
        await expect(exitDialog).toBeDisplayed();
        console.log('Exit confirmation dialog is displayed');

        // Verify message
        const message = await $(ReviewObject.exitDialog.message);
        await expect(message).toBeDisplayed();
        console.log('Exit warning message is displayed');

        // Verify buttons
        const confirmBtn = await $(ReviewObject.exitDialog.confirmButton);
        const cancelBtn = await $(ReviewObject.exitDialog.cancelButton);
        await expect(confirmBtn).toBeDisplayed();
        await expect(cancelBtn).toBeDisplayed();
        console.log('Confirm and Cancel buttons are displayed');

        // Cancel exit to clean up
        await ReviewHelpers.cancelExit();
        
        console.log('TC-REVIEW-049: PASSED');
    });
});
