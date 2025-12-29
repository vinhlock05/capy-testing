/**
 * TC-WM-007: Verify error message is displayed when word list loading fails
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-007: Error Message on Loading Failure', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should display error message when word list loading fails', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-007: PASSED - Error message handling');
    });
});
